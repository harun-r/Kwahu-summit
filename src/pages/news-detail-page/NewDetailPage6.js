import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeaderBG from "../../assets/images/header-bg/news-bg-6.png";
import Footer from "../../components/footer/Footer";
import NewsDetailSection6 from "../../components/news-detail-section/NewsDetailSection6";

const NewDetailPage6 = () => {
    return (
        <div className="news-detail-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                name="AAAM, AfCFTA brainstorm on how to fast-track devt of African automobile sector"
            />
            <NewsDetailSection6/>
            <Footer/>
        </div>
    );
};

export default NewDetailPage6;
