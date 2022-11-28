import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import headerBG from "../../assets/images/header-bg/sponsor-bg.png";
import SponsorsSection from "../../components/sponsors-section/SponsorsSection";
import Footer from "../../components/footer/Footer";

const SponsorsPage = () => {
    return (
        <div className="sponsor-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={headerBG}
                name="Sponsors"
                desc="About the Summit"
            />
            <div className="section-space-y"></div>
            <SponsorsSection/>
            <Footer/>
        </div>
    );
};

export default SponsorsPage;
