import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Player = () =>{ 

    return (
        <>
        <ReactAudioPlayer
                src="data"
                autoPlay
                controls
            />
        </>
    )
}

export default Player;