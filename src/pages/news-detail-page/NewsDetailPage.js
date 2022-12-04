import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import PageShape from "../../components/page-shape/PageShape";
import HeaderBG from '../../assets/images/header-bg/news-detail-bg.png';
import Footer from "../../components/footer/Footer";
import NewsDetailSection from "../../components/news-detail-section/NewsDetailSection";

const NewsDetailPage = () => {
    return (
        <div className="news-detail-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeaderBG}
                name="Benefits of African Economic Integration"
            />
            <NewsDetailSection/>
            <Footer/>
        </div>
    );
};

export default NewsDetailPage;
