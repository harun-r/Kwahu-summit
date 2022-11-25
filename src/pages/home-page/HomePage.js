import React from 'react';
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero-section/HeroSection";
import About from "../../components/about/About";
import VideoSection from "../../components/video/video-section";
import WhoAttending from "../../components/who-attending/whoAttending";
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="main-head">
                <Header />
                <HeroSection/>
                <About/>
                <VideoSection/>
                <WhoAttending/>
            </div>
        </div>
    );
};

export default HomePage;
