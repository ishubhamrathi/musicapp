// import React from 'react';
// import ReactAudioPlayer from 'react-audio-player';
// import { useGlobalContext } from "../context";


// const Player = () =>{ 
//     const {songLink} = useGlobalContext();

//     return (
//         <>
//         <ReactAudioPlayer
//                 src={songLink}
//                 autoPlay
//                 controls
//             />
//         </>
//     )
// }

// export default Player;


import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useGlobalContext } from "../context";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./style.css";
const Player = () => {
    const {songLink} = useGlobalContext();
    return (
        <>  <div className='player'>
            <AudioPlayer  src={songLink}/>
            </div>
        </>
    )
};

export default Player;