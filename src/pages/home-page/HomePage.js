import React from 'react';
import Header from "../../components/header/Header";
import HeroSection from "../../components/hero-section/HeroSection";
import About from "../../components/about/About";
import VideoSection from "../../components/video/video-section";
import WhoAttending from "../../components/who-attending/whoAttending";
import InviteSection from "../../components/invite-section/InviteSection";
import NotableSection from "../../components/notable-section/notable-section";
import KeyTopics from "../../components/key-topics/KeyTopics";
import NewSection from "../../components/news-section/NewSection";
import FAQSection from "../../components/faq-section/FAQSection";
import SponsorsSection from "../../components/sponsors-section/SponsorsSection";
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="main-head">
                <Header />
                <HeroSection/>
                <About/>
                <VideoSection/>
                <WhoAttending/>
                <InviteSection/>
                <NotableSection/>
                <KeyTopics/>
                <NewSection/>
                <FAQSection/>
                <SponsorsSection/>
            </div>
        </div>
    );
};

export default HomePage;
