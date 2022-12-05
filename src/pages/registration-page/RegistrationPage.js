import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeaderBG from "../../assets/images/header-bg/registration-bg.png";
import Footer from "../../components/footer/Footer";
import RegistrationSection from "../../components/registration-section/RegistrationSection";

const RegistrationPage = () => {
    return (
        <div className="registration-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                name="REGISTRATION"
                desc="Summit online registration"
            />
            <RegistrationSection/>
            <Footer/>
        </div>
    );
};

export default RegistrationPage;
