import React from 'react' ;
import './Song.css' ;

const Song=({songname,songartist,songlink})=>{
    function playSong(){
        let video = document.getElementsByClassName("video")[0];
        video.classList.add("show");
    }
    return (
        <div class="card">
            <video src ={songlink} className="video" width="300px" height="50px" controls>
            </video>
            <h1>{songname}</h1>
            <p>{songartist}</p>
        </div>
    );
}

export default Song;
