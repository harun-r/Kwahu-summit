import React from 'react';
import PageShape from "../../components/page-shape/PageShape";
import Header from "../../components/header/Header";
import HeroSectionSM from "../../components/hero-section-sm/HeroSectionSM";
import HeroBG from "../../assets/images/header-bg/peduase-bg.png";
import Footer from "../../components/footer/Footer";
import CardAddress from "../../components/card-address/CardAddress";
import Avatar from '../../assets/images/avatar.png'
const PeduasePage = () => {
    return (
        <div className="peduase-page">
            <PageShape/>
            <Header/>
            <HeroSectionSM
                image={HeroBG}
                name="Peduase"
                desc="Event guide"
            />
            <div className="p-4">
                <CardAddress
                    title="Presidential & Business Executives’ Dialogues"
                    date="28 january"
                    desc="A high-level roundtable discussion on the ‘Kwahu Compact’ by African Heads of State, Business Leaders, and other notable personalities."
                    image={Avatar}
                    name="Nana Addo Danquah Akufo-Addo"
                    degi="President of the Republic of Ghana"
                    location="Peduase, Aburi Mountains, Eastern Ghana"
                />

            </div>
            <Footer/>
        </div>
    );
};

export default PeduasePage;
