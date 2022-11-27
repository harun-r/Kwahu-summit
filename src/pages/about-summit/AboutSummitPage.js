import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import headerBG from '../../assets/images/header-bg/about-summit-bg.png'
const AboutSummitPage = () => {
    return (
        <div className="about-summit-page">
            <Header/>
            <HeroSectionSM
                image={headerBG}
                name="About the summit"
                desc="About the summit"
            />
        </div>
    );
};

export default AboutSummitPage;
