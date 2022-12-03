import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeroBG from "../../assets/images/header-bg/the-aft-bg.png";
import PageShape from "../../components/page-shape/PageShape";
import AgendaSection from "../../components/agenda-section/AgendaSection";
import Footer from "../../components/footer/Footer";

const AgendaPage = () => {
    return (
        <div className="agenda-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeroBG}
                name="The AU Agenda 2063"
                desc="The AU Agenda 2063"
            />
            <AgendaSection/>
            <Footer/>
        </div>
    );
};

export default AgendaPage;
