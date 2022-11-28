import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import headerBG from "../../assets/images/header-bg/speaker-2-bg.png";
import HeaderText from "../../components/header-text/HeaderText";
import NotableSection from "../../components/notable-section/notable-section";
import Footer from "../../components/footer/Footer";

const SpeakersPage2 = () => {
    return (
        <div className="speaker-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={headerBG}
                name="Invited Personalities"
                desc="Invited Personalities"
            />
            <HeaderText/>
            <NotableSection hideButton={false}/>
            <Footer/>
        </div>
    );
};

export default SpeakersPage2;
