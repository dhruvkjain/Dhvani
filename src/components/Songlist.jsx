import React from "react";
import './Songlist.css';
import Song from './Song';


const Songlist = ({display})=>{
    return (
        <div className="display">
            {
                display[0].map((data,i)=>{
                    if(data != null)
                    // return  console.log(data);
                    return <Song songname={data.name} songartist={data.primaryArtists} songlink={data.downloadUrl[4].link}/>
                })
            }
            {/* <div className="display">
            <video src ={displaylink} className="video" width="0px" height="0px" controls>
            </video>
            <div className="details" onClick={playSong}>
                <h1>{displayname}</h1>
                <p>{displayartist}</p>
            </div>
            </div> */}
        </div>
    );
}
export default Songlist;