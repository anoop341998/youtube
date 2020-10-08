import React, {useState} from 'react';
import axios from 'axios';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

function Comments(props){

    const [comment, setComment] = useState("");

    const handleChange = (ev) => {
        setComment(ev.currentTarget.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const variable = {
            content: comment,
            writer: localStorage.getItem('userId'),
            postId: props.videoId,

        }
        // console.log(variable.postId);
        axios.post('/api/comment/savecomment', variable)
            .then(res => {
                if(res.data.success){
                    setComment("");
                    props.updateComment(res.data.comment);
                }
            })
            .catch(err => {
                alert('Failed to save comment');
            })
    }


    return (
        <div>
            <hr/>
            <p>Replies</p>
            {/* {console.log(props.commentList)} */}
            <div className="row">
                <form className="col s12"
                    onSubmit={handleSubmit}
                >
                    <div className="row">
                        <div className="input-field col s10">
                        <textarea id="textarea1" 
                        className="materialize-textarea"
                        onChange={handleChange}
                        value={comment}
                        >
                        </textarea>
                        <label for="textarea1">Write a comment</label>
                        </div>
                        <div className="col s2">
                            <button className="btn" onSubmit={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {props.commentList && props.commentList.map((comment, index) => {
                return (!comment.responseTo && 
                    <React.Fragment>
                    <SingleComment comment={comment}
                     videoId={props.videoId} 
                     updateComment={props.updateComment}
                    />
                    <ReplyComment 
                     commentList={props.commentList} 
                     videoId={props.videoId} 
                     updateComment={props.updateComment}
                     parentCommentId={comment._id}
                    />
                    </React.Fragment>
                )
            })}
        </div>
    );
}

export default Comments