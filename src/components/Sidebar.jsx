import React from "react";
// import { useState } from 'react'
import './Sidebar.css'

function Sidebar (){
  const draw =()=>{
    let sidebar=document.getElementsByClassName("sidebar")[0];
    sidebar.classList.toggle("draw");
  }
  return(
    <div className="sidebar">
    <div onClick={draw} className="sd drawer">
        <svg width={46} height={46} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
        </svg>
    </div>
    <div className="a sd homepage">
        <svg width={46} height={46} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
        </svg>
        <div className="txt">HOME</div>
    </div>
    <div className="a sd search">
        <svg width={46} height={46} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z" />
        <path d="m21 21-4.35-4.35" />
        </svg>
        <div className="txt">SEARCH</div>
    </div>
    <div className="a sd playlist">
        <svg width={46} height={46} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18V5l12-2v13" />
        <path d="M6 15a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
        <path d="M18 13a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
        </svg>
        <div className="txt">PLAYLIST</div>
    </div>
    <div className="a sd profile">
        <svg width={46} height={46} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
        </svg>
        <div className="txt">PROFILE</div>
    </div>
    <div className="a sd settings">
        <svg width={46} height={46} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <div className="txt">SETTINGS</div>
    </div>
    </div>
  )
}

export default Sidebar ;

