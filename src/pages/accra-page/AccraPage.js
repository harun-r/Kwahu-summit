import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeroBG from "../../assets/images/header-bg/accra-bg.png";
import CardAddress from "../../components/card-address/CardAddress";
import Avatar from "../../assets/images/avatar-icon.png";
import Footer from "../../components/footer/Footer";

const AccraPage = () => {
    return (
        <div className="accra-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeroBG}
                name="Accra"
                desc="Event guide"
            />
            <div className="p-4">
                <CardAddress
                    title="Welcome reception"
                    date="27 January (Evening)"
                    desc="An exclusive welcome cocktail reception with participants for the Presidential and Business Executives’ Dialogues"
                    image={Avatar}
                    name="Hosted by KGL Group"
                    location="Kempinski Hotel, Accra, Ghana"
                />
                <CardAddress
                    title="Banquet & Awards"
                    date="27 January (Evening)"
                    desc="Official Banquet, Awards ceremony, and Launch of the Africa Investment Promotion Agencies. Strictly by Invitation"
                    image={Avatar}
                    name="Hosted by KGL Group"
                    location="Kempinski Hotel, Accra, Ghana"
                />
            </div>
            <Footer/>
        </div>
    );
};

export default AccraPage;
