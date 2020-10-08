import React from 'react';
// import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';


function NavBar() {

  return (
    <nav>
      <div >
        <span className="grid-item" style={{margin: "0rem 5rem 0rem 1rem"}}><a href="/">Home</a></span>
        <span className="grid-item" style={{marginRight: "73%"}}>
          <a href="/subscriptions">Subscriptions</a>
        </span>
        <span className="grid-item" style={{margin: "0rem 1rem 0rem 1rem"}}>
          <a href="/video/upload">Upload</a>
        </span>
        <RightMenu/>
      </div>
    </nav>
  )
}

export default NavBar