import React from 'react';
import { Link } from 'react-router-dom';
import img2 from "../../assets/image/img2.png";
import "../landingpage/landingpage.css"

export default function Landingpage() {
    return (
        <>
            <h1 id="landingpage_heading">Landing Page</h1>
            <div id='main_landingPage'>
                <div id='imgDiv_landingPage'>
                    <img src={img2} alt="img2" id="img_landingPage" />
                </div>
                <div id='others'>
                    <p id="p_landingPage"> 10X TEAM 04 </p>
                    <Link to="/post"><button id="btn_landingPage">Enter</button></Link>
                </div>
            </div>
        </>
    );
}

