import React from 'react';
//bg image
import bgImg from '../../assets/images/hero-bg/bg-1.png'
const HeroSection = () => {

    return (
        <div className="hero-section">
            <div className="bg-img">
                <img src={bgImg} alt="bg-image"/>
            </div>
            <div className="hero-content">
                <div className="container">
                    <div className="content">
                        <h3 className="titleCap">AfCTFA:</h3>
                        <h3 className="title">From ambition to action </h3>
                        <p className="desc">Energy security For industrialisation</p>
                        <button className="btn btn-register btn-outline-light">Register</button>
                        <div className="rotate-text">
                            <p>Who is attending ?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
