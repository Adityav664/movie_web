import React from 'react';
import './header.component.css';
import movie from './../../static/movie.jpg';
const Header=(props)=>(
    <div className="header">
        <div className="head">
            <img className="header-img" src={movie} alt="" />
        </div>
        <div className='tail'>
            <p onClick={()=>console.log("Movie")}>Movie</p>
            <p onClick={()=>console.log("Movie Doc")}>Movie Doc</p>
            <p onClick={()=>console.log("Login")}>Login</p>
            <p onClick={()=>console.log("Contact")}>Contact</p>
        </div>
    </div>
);

export default Header;