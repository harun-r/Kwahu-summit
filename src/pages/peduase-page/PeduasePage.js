import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeroBG from "../../assets/images/header-bg/peduase-bg.png";
import Footer from "../../components/footer/Footer";

const PeduasePage = () => {
    return (
        <div className="peduase-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeroBG}
                name="Peduase"
                desc="Event guide"
            />
            <Footer/>
        </div>
    );
};

export default PeduasePage;
