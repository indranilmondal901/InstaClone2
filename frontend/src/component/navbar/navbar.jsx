import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import camera from '../../assets/image/camera.png'
import "../navbar/navbar.css"


export default function Navbar() {
    return (
        <div id="main_navbar" >
            <Link to="/">
                <img src={logo} alt="logo" id='logo_navbar' />
            </Link>
            <h1 id="navbar_heading">InstaClone</h1>
            <Link to="/post">
                <img src={camera} alt="camera" id='camera_navbar' />
            </Link>
        </div>
    )
}