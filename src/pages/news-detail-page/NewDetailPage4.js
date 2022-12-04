import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeaderBG from "../../assets/images/header-bg/news-bg-4.png";
import Footer from "../../components/footer/Footer";
import NewsDetailSection4 from "../../components/news-detail-section/NewsDetailSection4";

const NewDetailPage4 = () => {
    return (
        <div className="news-detail-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                name="Trading under AfCFTA to progress on agreed 87.7% tariff lines"
            />
            <NewsDetailSection4/>
            <Footer/>
        </div>
    );
};

export default NewDetailPage4;
