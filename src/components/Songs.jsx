import React from "react";
import { useGlobalContext } from "../context";
import "./style.css"

const Songs = () =>{
    const {hits, isLoading, playMusic} = useGlobalContext();

    
    if (isLoading){
        return <>
            <h1>Loading...</h1>
        </>
      }

    return (
        <>
        <div className="songLists">
        {hits.map((currSong)=>{
            const {name , image, downloadUrl, primaryArtists, year, label} = currSong; 
            return (
                <>
                    <div className="center">
                        <div className="songDetail">
                            <div className="songTitle">{name}</div>
                            <div className="container">
                                <div className="row"><img className="imgIcon" src={image[1].link}/></div>
                                <div className="row">
                                    <div className="artistName">Artists : {primaryArtists}</div>
                                    <div className="label">Label : {label}</div>
                                    <div className="year">Year : {year}</div>
                                    <button className="playBtn" onClick={()=>playMusic(downloadUrl)}>Play</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
        {/* <Player link={currSong.downloadUrl[0].link}/> */}
        {/* {hits.name} */}
        </div>
        </>
    )
}
export default Songs;