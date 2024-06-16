import React from "react";
import './Header.css';
import logo from '../src/assets/logo.webp';


function Header(){
    const date = new Date();

    const a=date.getDate();
    const b=date.getMonth();
    const c=date.getFullYear();
    const sec=date.getSeconds();
    const hour=date.getHours();
    const min=date.getMinutes();

    return(<>
    <div className="container">
        <div className="logo">
<img className="imagelogo" src={logo}></img>
        </div>
        
        <div className="blogname">
Rana BLOGS
        </div>
        <div className="flag">
            <div className="orange">
                RADHE RADHE
            </div>
            <div className="white">
{a}/{b+1}/{c}
            </div>
            <div className="green">
Time = {hour}:{min}
            </div>
        </div>
        <div className="date">

        </div>
    </div>
    
    </>)
}

export default Header;