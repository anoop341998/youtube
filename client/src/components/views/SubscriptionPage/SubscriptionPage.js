import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';

function SubscriptionPage(){
    const [videos, setVideos] = useState([]);

    let variables = {
        userFrom: localStorage.getItem("userId"),
    };

    useEffect(() => {
        axios.post('/api/video/getsubscriptionvideos', variables)
            .then(res => {
                if(res.data.success){
                    // console.log(res.data.videos);
                    setVideos(res.data.videos);
                }
                else{
                    alert('Unable to get subscribed users videos');
                }
            })
    }, [])

    const renderCards = videos.map((video, index) => {
        let minutes = Math.floor(video.duration / 60);
        let seconds = Math.floor(video.duration- minutes * 60);
        return  (<div className="row" key={index}>
                <div className="col s12 m4">
                <div className="card">
                    <a href={'/video/' + video._id}>
                    <div className="card-image">
                    <img alt="thumbnail" src={video.thumbnail}/>
                    <span className="card-title">{video.title}</span>
                    </div>
                    <div className="card-content">
                    <p>Duration: {minutes}:{seconds}</p>
                    <p>{video.views} views &nbsp; &nbsp; {moment(video.createdAt).format("MMM Do YY")}</p>
                    </div>
                    </a>
                    <div className="card-action">
                    <a href="#">{video.writer.name} {video.writer.lastname}</a>
                    </div>
                </div>
                </div>
            </div>)
    });
    
    return (
        <div style={{width:'85%', margin: '3rem auto'}}>
            <h2>Subcribed Videos</h2>
            <hr/>
            {renderCards}
        </div>
    )
}
export default SubscriptionPage;