import React from 'react';
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero-section/HeroSection";
import About from "../../components/about/About";
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="main-head">
                <Header />
                <HeroSection/>
                <About/>
            </div>
        </div>
    );
};

export default HomePage;
