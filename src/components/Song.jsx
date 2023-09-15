import React from "react";
import './Song.css';

const Song = ({displayname,displayartist,displaylink})=>{
    function playSong(){
        let video = document.getElementsByClassName("video")[0];
        video.classList.add("show");
    }
    return (
        <div className="display">
            <div className="display">
            <video src ={displaylink} className="video" width="0px" height="0px" controls>
            </video>
            <div className="details" onClick={playSong}>
                <h1>{displayname}</h1>
                <p>{displayartist}</p>
            </div>
            </div>
        </div>
    );
}
export default Song;