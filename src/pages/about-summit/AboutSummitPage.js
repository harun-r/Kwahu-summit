import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import headerBG from '../../assets/images/header-bg/about-summit-bg.png'
import PageShape from "../../components/page-shape/PageShape";
import About from "../../components/about/About";
import VideoSection from "../../components/video/video-section";
import ObjectivesSection from "../../components/objectives-section/ObjectivesSection";
import Footer from "../../components/footer/Footer";
const AboutSummitPage = () => {
    return (
        <div className="about-summit-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={headerBG}
                name="About the summit"
                desc="About the summit"
            />
            <About hasDot={false}/>
            <VideoSection/>
            <ObjectivesSection/>
            <Footer/>
        </div>
    );
};

export default AboutSummitPage;
