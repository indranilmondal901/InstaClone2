import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../postPage/postPage.css"
import Navbar from '../navbar/navbar';



export default function PostPage() {

    const [imageFile, setImageFile] = useState('');
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescritpion] = useState("");


    function HandelPost() {
        //checking
        // console.log(imageFile.name)
        // console.log(username)
        // console.log(location)
        // console.log(description)

        // sending data to backend

        const formdata = new FormData();
        formdata.append("fileName", imageFile);
        formdata.append("author", username);
        formdata.append("location", location);
        formdata.append("description", description);
        fetch("http://localhost:8080/user", {
            method: "POST",
            body: formdata
        })
        // making input field empty
        // setImageFile("");
        // setUsername("");
        // setLocation("");
        // setDescritpion("")
    }


    return (
        <>
            <Navbar />
            <div id="main_postPage">
                <div>
                    <label htmlFor="file">Choose Your Image : </label>
                    <input type="file" name="myFile" id="myFileInput" accept=".jpg, .jpeg, .png" onChange={(e) => { setImageFile(e.target.files[0]) }} />
                </div>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" placeholder="Enter Your Name" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                </div>
                <div>
                    <label htmlFor="location"> Location :</label>
                    <input type="geolocation" id="locationInput" placeholder="enter your location" onChange={(e) => { setLocation(e.target.value) }} value={location} />
                </div>
                <div>
                    <label>description :</label>
                    <input type="text" id='description' placeholder='Type What You feel' onChange={(e) => { setDescritpion(e.target.value) }} value={description} />
                </div>
                <Link to="/view">
                    <div>
                        <button onClick={HandelPost} id="btn_postPage">Post</button>
                    </div>
                </Link>
            </div>
        </>
    )
}