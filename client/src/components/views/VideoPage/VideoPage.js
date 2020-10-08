import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SideVideo from './Sections/SideVideo';
import Subscriber from './Sections/Subscriber';
import Comments from './Sections/Comments';
import LikeDislike from './Sections/LikeDislike';
const env = require('dotenv').config();
const port = process.env.PORT || 5000;

function VideoPage(props){

    const [video, setVideo] = useState({});
    const [commentList, setCommentList] = useState([]);


    const variables = {
        videoId: props.match.params.videoid
    }

    const updateComment = (addComment) => {
        setCommentList(commentList.concat(addComment));
    }
    useEffect(() => {
        axios.post('/api/video/getVideo', variables)
            .then(response => {
                if (response.data.success) {
                    // console.log(response.data.video)
                    setVideo(response.data.video)
                } else {
                    alert('Failed to get video Info')
                }
            })

        axios.post('/api/comment/getComments', variables)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.comments);
                    setCommentList(response.data.comments)
                } else {
                    alert('Failed to get video Info')
                }
            })


    }, [])

    if(video.writer){
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m9 l9 xl9">
                        <video src={`/${video.filePath}`} 
                        controls style={{width:'100%'}}></video>
                        <div className="row" style={{gridTemplateColumns: "70% 30%"}}>
                            <ul className="col s6 m6 l6 x6">
                                <li><b style={{fontSize: '2rem'}}>{video.title}</b></li>
                                <li>{video.description}</li>
                                <li><b>{video.writer.name}</b></li>
                            </ul>
                            <LikeDislike 
                             video
                             videoId={video._id}
                             userId={localStorage.getItem('userId')}
                            
                            />
                            <Subscriber userTo={video.writer._id}
                             userFrom={localStorage.getItem('userId')}/>
                        </div>
                    </div>
                    <div className="col s12 m3 l3 x3">
                        <SideVideo/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m9 l9 xl9">
                        <Comments commentList={commentList}
                         videoId={video._id} 
                         updateComment={updateComment}
                        />
                    </div>
                </div>
                
            </div>
            
        ); 
    }
    else{
        return (<div>
            ...Loading
        </div>)
    }
}

export default VideoPage;