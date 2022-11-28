import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import headerBG from "../../assets/images/header-bg/speaker-bg.png";
import PageShape from "../../components/page-shape/PageShape";
import HeaderText from "../../components/header-text/HeaderText";
import InviteSection from "../../components/invite-section/InviteSection";
import Footer from "../../components/footer/Footer";

const SpeakerPage = () => {
    return (
        <div className="speaker-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={headerBG}
                name="Invited Heads of State"
                desc="Invited Heads of State"
            />
            <HeaderText/>
            <InviteSection hideButton={false}/>
            <Footer/>
        </div>
    );
};

export default SpeakerPage;
