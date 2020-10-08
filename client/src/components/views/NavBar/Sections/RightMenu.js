import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <span style={{margin: "0rem 5rem 0rem 1rem"}}>
          <a href="/login">Signin</a>
          {/* <a href="/register">Signup</a> */}
      </span>
    )
  } else {
    return (
        <span  key="logout" style={{margin: "0rem 5rem 0rem 1rem"}}>
          <a onClick={logoutHandler} href="#">Logout</a>
        </span>
    )
  }
}

export default withRouter(RightMenu);
