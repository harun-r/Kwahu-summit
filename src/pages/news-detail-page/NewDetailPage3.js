import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeaderBG from "../../assets/images/header-bg/news-bg-3.png";
import Footer from "../../components/footer/Footer";
import NewsDetailSection3 from "../../components/news-detail-section/NewsDetailSection3";

const NewDetailPage3 = () => {
    return (
        <div className="news-detail-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                name="Kwahu summit launched – Ghana to host Africa’s prosperity dialogues"
            />
            <NewsDetailSection3/>
            <Footer/>
        </div>
    );
};

export default NewDetailPage3;
