import React from 'react';
import {Link} from "react-router-dom";
import videoBG from '../../assets/images/video-bg.png';
import playIcon from '../../assets/images/icons/play-icon.png'
const VideoSection = () => {
    return (
        <div className="video-section p-4">
            <div className="container-fluid">
                <Link to="/" className="video-box">
                    <img src={videoBG} alt="bg"/>
                    <span className="play-icon"><img src={playIcon} alt="play"/></span>
                </Link>
            </div>
        </div>
    );
};

export default VideoSection;
