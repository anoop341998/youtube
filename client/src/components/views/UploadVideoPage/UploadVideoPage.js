import React, {useState, useLayoutEffect} from 'react';
import Dropzone from 'react-dropzone';
import M from "materialize-css";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getMetadata, Video} from 'video-metadata-thumbnails';
import VideoSnapshot from 'video-snapshot';


export default function UploadVideoPage(props){

    const user = useSelector(state => state.user);
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacy, setPrivacy] = useState(0);
    const [categories, setCategories] = useState("Movies");
    const [filePath, setFilePath] = useState("");
    const [duration, setDuration] = useState(""); 
    const [thumbnail, setThumbnail] = useState("");
    const [imgSrc, setImgSrc] = useState("https://miro.medium.com/max/1316/1*URHYGBQMuu9UWc4zEVFGPw.gif");


    const Private = [
        {value: 0, label: 'Private'},
        {value: 1, label: 'Public'},
    ]
    const Category = [
        {value: 0, label: 'Movies'},
        {value: 1, label: 'Music'},
        {value: 2, label: 'Sports'},
        {value: 3, label: 'Animals'},
        {value: 4, label: 'Auto-mobiles'},

    ]


    useLayoutEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('select');
            let instances = M.FormSelect.init(elems);
          });
    }, []); 
    const handleChangeTitle = (ev) => {
        setTitle(ev.currentTarget.value);
    }

    const handleChangeDescription = (ev) => {
        setDescription(ev.currentTarget.value);
    }

    const handleChangeTwo = (ev) => {
        setCategories(ev.currentTarget.value);
        // console.log(ev.currentTarget.value);

    }

    const handleChangeOne = (ev) => {
        setPrivacy(ev.currentTarget.value);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        if(user.userData && !user.userData.isAuth){
            return alert('Please login');
        }
        
        const variables = {
            writer: user.userData._id,
            title: title,
            description: description,
            privacy: privacy,
            filePath: filePath,
            categories: categories,
            duration: duration,
            thumbnail: thumbnail,
        }

        if(!variables.title || !variables.description ||
            !variables.privacy || !variables.filePath || !variables.categories
            ){
               alert('Please fill all fields');
           }

        console.log(variables.writer, 'here');
        axios.post('/api/video/uploadvideo', variables)
            .then(response => {
                if(response.data.success){
                    alert('Video uploaded successfully');
                    props.history.push('/');
                }
                else{
                    alert('Unable to save video in Server');
                }
            })
    }
    const onDrop = async(files) => {
        let formData = new FormData();
        const snapshoter = new VideoSnapshot(files[0]);
        const previewSrc = await snapshoter.takeSnapshot();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);
        const video = new Video(files[0]);
        const metadata =  await video.getMetadata();
        setDuration(metadata.duration);

        axios.post('/api/video/uploadfiles', formData, config)
            .then(response => {
                if(response.data.success){
                    let tmp = {
                        previewSrc: previewSrc,
                    }
                    setFilePath(response.data.filePath); 
                    axios.post('/api/video/thumbnail', tmp)
                        .then(response => {
                            if(response.data.success){
                                setThumbnail(response.data.thumbsFilePath);
                            }
                            else{
                                alert('Failed to make thumbnail')
                            }
                        })
                }
                else{
                    alert('Failed to save video');
                }
            });
    }


    return (
            <div className='container'>
                <div className="row">
                    <div className="col s4 push-s3">
                        <h3>Upload Video</h3>
                    </div>
                </div>
                <div className="row">
                    <form className="col s12"
                        onSubmit={onSubmit}
                    >
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input 
                                    id="title" 
                                    type="text" 
                                    className="validate" 
                                    name="title"
                                    value={title}
                                    onChange={handleChangeTitle}
                                />
                                <label htmlFor="title" className="active">Title</label>
                            </div>
                        </div> 
                        <div className="row">
                        {
                            thumbnail === "" && 
                              <Dropzone onDrop={onDrop}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <img 
                                            src={imgSrc}
                                            height='150px'
                                            width='300px'/>
                                    </div>
                                    </section>
                                )}
                            </Dropzone>
                        }                           
                            {thumbnail !== "" && 
                                <div>
                                    <img src={`/${thumbnail}`} alt="thumb"/>
                                </div>
                            }                     
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="description" 
                                    type="text" 
                                    className="validate"
                                    name="description"
                                    value={description}
                                    onChange={handleChangeDescription}
                                />
                                <label htmlFor="description"
                                 className="active">
                                     Description
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s2">
                                <select onChange={handleChangeOne}>
                                    {Private.map((item, index) => {
                                        return <option key={index} value={item.label}>{item.label}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s2">
                                <select onChange={handleChangeTwo}>
                                    {Category.map((item, index) => {
                                        return <option key={index} value={item.label}>{item.label}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s2">
                                <button onClick={onSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }