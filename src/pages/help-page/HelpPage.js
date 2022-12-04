import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeaderBG from "../../assets/images/header-bg/help-bg.png";
import Footer from "../../components/footer/Footer";
import FAQSection from "../../components/faq-section/FAQSection";
import MapSection from "../../components/map-section/MapSection";
import ContactSection from "../../components/contact-section/ContactSection";

const HelpPage = () => {
    return (
        <div className="help-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                name="Help"
            />
            <FAQSection/>
            <MapSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
};

export default HelpPage;
