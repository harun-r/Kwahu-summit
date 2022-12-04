import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeaderBG from "../../assets/images/header-bg/news-bg-5.png";
import Footer from "../../components/footer/Footer";
import NewsDetailSection5 from "../../components/news-detail-section/NewsDetailSection5";

const NewDetailPage5 = () => {
    return (
        <div className="news-detail-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                name="Importance of regional and continental integration for Africa’s development"
            />
            <NewsDetailSection5/>
            <Footer/>
        </div>
    );
};

export default NewDetailPage5;
