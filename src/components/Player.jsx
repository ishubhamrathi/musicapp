
import React from 'react';
import { useGlobalContext } from "../context";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./style.css";

const Player = () => {
    const {songLink} = useGlobalContext();
    return (
        <>  <div className='player'>
            <AudioPlayer src={songLink}/>
            </div>
        </>
    )
};

export default Player;


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import { useGlobalContext } from "../context";
// import { faCirclePlay, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// const Player = () =>{
//     const {songLink} = useGlobalContext();
//     // const {name , image, downloadUrl, primaryArtists, year, label} = currSong; 
//     return (
//         <>
//             <div class="music-player">
//             <div class="song-bar">
//                 <div class="song-infos">
//                     <div class="image-container">
//                         <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg" alt="" />
//                     </div>
//                     <div class="song-description">
//                         <p class="title">
//                             Watashitachi wa Sou Yatte Ikite Iku Jinshu na no
//                         </p>
//                         <p class="artist">Masaru Yokoyama</p>
//                     </div>
//                 </div>
//                 <div class="icons">
//                     <i class="far fa-heart"></i>
//                     <i class="fas fa-compress"></i>
//                 </div>
//             </div>
//             <div class="progress-controller">
//                 <div class="control-buttons">
//                     <i class="fas fa-random"></i>
//                     <i class="fas fa-step-backward"></i>
//                     <i class="play-pause fas fa-play"></i>
//                     <i class="fas fa-step-forward"></i>
//                     <i class="fas fa-undo-alt"></i>
//                 </div>
//                 <div class="progress-container">
//                     <span>0:49</span>
//                     <div class="progress-bar">
//                         <div class="progress"></div>
//                     </div>
//                     <span>3:15</span>
//                 </div>
//             </div>
//             <div class="other-features">
//                 <i class="fas fa-list-ul"></i>
//                 <i class="fas fa-desktop"></i>
//                 <div class="volume-bar">
//                     <i class="fas fa-volume-down"></i>
//                     <div class="progress-bar">
//                         <div class="progress"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Player;





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

