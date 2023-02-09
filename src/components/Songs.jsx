import React from "react";
import { useGlobalContext } from "../context";


const Songs = () =>{
    const {hits, isLoading, playMusic} = useGlobalContext();

    
    if (isLoading){
        return <>
            <h1>Loading...</h1>
        </>
      }

    return (
        <>
        {hits.map((currSong)=>{
            const {name , image, downloadUrl} = currSong; 
            return (
                <>
                <h2>{name}</h2>
                <br />
                <img src={image[1].link}/>
                <br/>
                <button onClick={()=>playMusic(downloadUrl)}> Player</button>
                </>
            )
        })}
        {/* <Player link={currSong.downloadUrl[0].link}/> */}
        {/* {hits.name} */}
        </>
    )
}
export default Songs;