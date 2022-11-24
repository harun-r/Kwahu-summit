import React from 'react';
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero-section/HeroSection";
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="main-head">
                <Header />
                <HeroSection/>
            </div>
        </div>
    );
};

export default HomePage;
