import React, {useState } from 'react';
import axios from 'axios';
import LikeDislike from './LikeDislike';


function SingleComment(props){

    const [commentValue, setCommentValue] = useState("");
    const [openReply, setOpenReply] = useState(false);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const variables = {
            writer: localStorage.getItem('userId'),
            postId: props.videoId,
            responseTo: props.comment._id,
            content: commentValue,
        }

        console.log(variables);
        axios.post('/api/comment/savecomment', variables)
            .then(res => {
                if(res.data.success) {
                    console.log("res",res.data.comment);
                    setCommentValue("");
                    setOpenReply(!openReply);
                    props.updateComment(res.data.comment);
                }
                else{
                    alert('Failed to save comment reply');
                }
            })
    }

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value);
    }

    const OpenReply = () => {
        setOpenReply(!openReply);
    }

    return (
        <div 
         >
            <div style={{color: 'grey', }}><b>{props.comment.writer.name}</b></div>
            <div>{props.comment.content}</div>
            <LikeDislike comment commentId={props.comment._id} userId={localStorage.getItem('userId')}/>
            <span
            onClick={OpenReply} 
            key="comment-basic-reply-to"
            style={{color:"grey", textTransform: "capitalize", }}
            >
            <br/>
            <b style={{fontSize: '1rem'}}>Reply to</b>
            </span>
            <div>
            <br/>
            {openReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <textarea
                        style={{ width: '100%', borderRadius: '5px', height:'3rem' }}
                        onChange={handleChange}
                        value={commentValue}
                        placeholder="write some comments"
                    />
                    <br />
                    <button className="btn"
                    style={{ width: '20%', height: '3rem' }} 
                    onClick={onSubmit}>Submit</button>
                </form>
            }
            </div>
            
        </div>
    )
}

export default SingleComment;