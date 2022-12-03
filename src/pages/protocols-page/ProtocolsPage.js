import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeroBG from "../../assets/images/header-bg/protocols-bg.png";
import Footer from "../../components/footer/Footer";
import ProtocolsSection from "../../components/protocols-section/ProtocolsSection";

const ProtocolsPage = () => {
    return (
        <div className="protocols-page">
            <Header/>
            <HeroSectionSM
                image={HeroBG}
                name="Protocols"
                desc="Event guide"
            />
            <ProtocolsSection/>
            <Footer/>
        </div>
    );
};

export default ProtocolsPage;
