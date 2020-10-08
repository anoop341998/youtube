import React, { useEffect, useState } from 'react';
import Like from '../icons/like.svg';
import Liked from '../icons/liked.svg';
import Disliked from '../icons/disliked.svg';
import Dislike from '../icons/dislike.svg';
import axios from 'axios';


function LikeDislike(props){

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likeAction, setLikeAction] = useState(null);
    const [dislikeAction, setDislikeAction] = useState(null);

    let variables;

    if(props.video){
        variables = {videoId: props.video.videoId, userId: props.userId}
    }
    else{
        variables = {commentId: props.commentId, userId:props.userId}
    }

    

    useEffect(() => {
        
        axios.post('/api/like/getlikes', variables)
            .then(res => {
                if(res.data.success){
                    console.log(res.data.likes);
                    setLikes(res.data.likes.length);
                    res.data.likes.map( like => {
                        if(like.userId === props.userId) {
                            setLikeAction('liked');
                        }
                    })
                }
                else{
                    alert('Failed to get likes count');
                }
            })
            .catch(err => console.log(err))

        axios.post('/api/like/getdislikes', variables)
            .then(res => {
                if(res.data.success){
                    console.log(res.data.dislikes);
                    setLikes(res.data.dislikes.length);
                    res.data.dislikes.map( dislike => {
                        if(dislike.userId === props.userId) {
                            setDislikeAction('disliked');
                        }
                    })
                }
                else{
                    alert('Failed to get dislikes count');
                }
            })
            .catch(err => console.log(err))
    }, [])



    const onLike = (ev) => {
        if(likeAction === null) {

            axios.post('/api/like/pluslike', variables)
                .then(res => {
                    if(res.data.success){
                        setLikes(likes + 1);
                        setLikeAction('liked');
                        if(dislikeAction === "disliked"){
                            setDislikeAction(null);
                            setDislikes(dislikes - 1);
                        }
                    }
                    else{
                        alert('Failed to like');
                    }
                })
                .catch(err => console.log(err))
            
        }
        else{
            axios.post('/api/like/unlike', variables)
                .then(res => {
                    if(res.data.success){
                        setLikes(likes - 1);
                        setLikeAction(null);
                    }
                    else{
                        alert('Failed to unlike');
                    }
                })
                .catch(err => console.log(err))

        }
    }




    const onDislike = (ev) => {
        if(dislikeAction !== null) {

            axios.post('/api/like/undislike', variables)
                .then(res => {
                    if(res.data.success){
                        setDislikes(dislikes - 1);
                        setDislikeAction(null);
                    }
                    else{
                        alert('Failed to remove dislike');
                    }
                })
                .catch(err => console.log(err))
            
        }
        else{
            axios.post('/api/like/updislike', variables)
                .then(res => {
                    if(res.data.success){
                        setDislikes(dislikes + 1);
                        setDislikeAction('disliked');
                        if(likeAction === "liked"){
                            setLikeAction(null);
                            setLikes(likes - 1);
                        }
                    }
                    else{
                        alert('Failed to dislike');
                    }
                })
                .catch(err => console.log(err))

        }
    }




    return (
        <div className="col s3 m3 l3 xl3" style={{marginTop: '25px'}}>
            <span style={{fontSize: '1rem'}}>{likes} </span>
            <img src={likeAction === 'liked' ? Liked : Like} 
             style={{width: '1rem', height:'1rem'}}
             alt="like" title="like" onClick={onLike}
             />
             &nbsp;&nbsp;
            <img src={dislikeAction === 'disliked' ? Disliked : Dislike}
             style={{width: '1rem', height:'1rem'}}
             alt="dislike" title="dislike" onClick={onDislike}
            />
            <span style={{fontSize: '1rem'}}> {dislikes}</span>
        </div>
    )
}

export default LikeDislike;