import React from 'react';
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import PageShape from "../../components/page-shape/PageShape";
import HeroBG from '../../assets/images/header-bg/news-bg.png'
import NewsAll from "../../components/news-all/NewsAll";
import Footer from "../../components/footer/Footer";
const NewsPage = () => {
    return (
        <div className="news-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeroBG}
                name="News"
                desc="News"
            />
            <NewsAll/>
            <Footer/>
        </div>
    );
};

export default NewsPage;
