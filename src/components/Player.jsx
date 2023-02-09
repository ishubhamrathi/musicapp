import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useGlobalContext } from "../context";


const Player = () =>{ 
    const {songLink} = useGlobalContext();

    return (
        <>
        <ReactAudioPlayer
                src={songLink}
                autoPlay
                controls
            />
        </>
    )
}

export default Player;