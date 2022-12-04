import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeroBG from "../../assets/images/header-bg/accra-bg.png";
import Footer from "../../components/footer/Footer";

const GalleryPage = () => {
    return (
        <div className="gallery-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeroBG}
                name="Gallery"
                desc="Kwahu Summit Launch"
            />
            <Footer/>
        </div>
    );
};

export default GalleryPage;
