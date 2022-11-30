import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import PageShape from "../../components/page-shape/PageShape";
import PlanningCommitteSection from "../../components/planning-committe-section/PlanningCommitteSection";
import HeaderBG from '../../assets/images/header-bg/planning-bg.png'
import Footer from "../../components/footer/Footer";
const PlanningCommitteePage = () => {
    return (
        <div className="planning-committee-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                title="Planning committee"
                desc="About the Summit"
            />
            <PlanningCommitteSection/>
            <Footer/>
        </div>
    );
};

export default PlanningCommitteePage;
