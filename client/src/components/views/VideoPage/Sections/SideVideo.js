import React, {useEffect, useState} from 'react';
import axios from 'axios';

function SideVideo(){

    
    const [sideVideos, setSideVideos] = useState([]);
    useEffect(() => {
        axios.get('/api/video/getvideos')
            .then(res => {
                if(res.data.success){
                    // console.log("http://localhost:5000" + res.data.videos[0].thumbnail);
                    setSideVideos(res.data.videos);
                }
                else{
                    alert('Unable to get videos to display on SidePanel');
                }
            })
    }, [])

    const SideVideoItem = sideVideos.map((video,index) => {
        let minutes = Math.floor(video.duration / 60);
        let seconds = Math.floor(video.duration- minutes * 60);


        return (
                <div style={{display:"flex", marginTop: "1rem", padding: "0 2rem"}}>
                    <div style={{width: "40%", marginRight: "1rem"}}>
                        <a href={"/video/" + video._id}>
                            <img style={{width: '100%', height:"100%"}} 
                                src={`${video.thumbnail}`}
                                alt="thumbnail"
                            />
                        </a>
                    </div>
                    {console.log(`/${video.thumbnail}`)}
                    <div style={{width: "50%"}}> 
                        <a href={"/video/" + video._id}>
                            <div>
                                <a href="#">{video?.writer?.name}</a>
                                {video.title} <br/>
                                {video.views} views <br/>
                                {minutes}:{seconds} <br/>
                            </div>
                        </a>
                    </div>
                    
                </div>
        );
    })

    return (
        <React.Fragment>
            {SideVideoItem}
        </React.Fragment>
    );
}

export default SideVideo;