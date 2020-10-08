import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Subscriber(props){

    const [subscribeNumber, setSubscribeNumber] = useState(0);
    const [subscribed, setSubscribed] = useState(false)
    const variables = {
        userTo: props.userTo,
        userFrom: props.userFrom

    };

    const onSubscribe = (ev) => {
        let subscribeVariables = {
            userTo: props.userTo,
            userFrom: props.userFrom
        };

        if(subscribed){
            axios.post('/api/subscribe/unsubscribe', subscribeVariables)
            .then(res => {
                if(res.data.success){
                    setSubscribeNumber(subscribeNumber - 1);
                    setSubscribed(!subscribed);
                }
                else{
                    alert("Failed to unsubscribe, please try again later");
                }
            })
        }
        else{
            axios.post('/api/subscribe/subscribe', subscribeVariables)
            .then(res => {
                if(res.data.success){
                    setSubscribeNumber(subscribeNumber + 1);
                    setSubscribed(!subscribed);
                }
                else{
                    alert("Failed to Subscribe, please try again later");
                }
            })
        }
    }


    useEffect(() => {
        axios.post('/api/subscribe/subscribeNumber', variables)
            .then(res => {
                if(res.data.success){
                    setSubscribeNumber(res.data.subscribeNumber);
                }
                else{
                    alert("Failed to get number of subscribers for this user");
                }
            })
        axios.post('/api/subscribe/subscribed', variables)
            .then(res => {
                if(res.data.success){
                    // console.log(res.data.subscribed);
                    setSubscribed(res.data.subscribed);
                }
                else{
                    alert("Failed to get if you are subscribed to this user or not");
                }
            })
    }, []);

    return (
        <div className="col s3 m3 l3 xl3" style={{marginTop: '20px'}}>
            <button className="waves-effect waves-light btn"
                onClick = {onSubscribe}
            >
                {subscribeNumber} {(subscribed === true) ? "SUBSCRIBED" : "SUBSCRIBE"}
            </button>
        </div>
    );
}

export default Subscriber;