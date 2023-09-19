import React, { Component } from 'react' ;
import './Song.css' ;
import Tilt from 'react-parallax-tilt';

const Song=({songname,songartist,songlink,songimg})=>{
    // function playSong(){
    //     let video = document.getElementsByClassName("video")[0];
    //     video.classList.add("show");
    // }

    return (
        <Tilt>
            <div class="card">
                <div className="poster">
                    <img src={songimg}></img>
                    {/* <div id="waveform"></div> */}
                </div>
                <div className="inner">
                    <div className="song">
                        <video src ={songlink} className="video" width="180px" height="50px" controls>
                        </video>
                    </div>
                    <h1>{songname}</h1>
                    <p>{songartist}</p>
                </div>
            </div>
        </Tilt>
    );

}

export default Song;
