import React from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//bg image
import bgImg1 from '../../assets/images/hero-bg/bg-1.png'
import bgImg2 from '../../assets/images/hero-bg/bg-2.png'
import bgImg3 from '../../assets/images/hero-bg/bg-3.png'
const HeroSection = () => {
    let slider_settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="hero-section">
            <Slider {...slider_settings}>
                <div className="item-slider">
                    <div className="bg-img">
                        <img src={bgImg1} alt="bg-image"/>
                    </div>
                    <div className="hero-content">
                        <div className="container">
                            <div className="content">
                                <h3 className="titleCap">Transforming Africa:</h3>
                                <h3 className="title">Trough trade and impact invesment</h3>
                                <p className="desc">Delivering prosperity through continental trade</p>
                                <button className="btn btn-register btn-outline-light">Register</button>
                                <div className="rotate-text">
                                    <p>Who is attending ?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-slider">
                    <div className="bg-img">
                        <img src={bgImg2} alt="bg-image"/>
                    </div>
                    <div className="hero-content">
                        <div className="container">
                            <div className="content">
                                <h3 className="titleCap">Transforming Africa:</h3>
                                <h3 className="title">Trough trade and impact invesment</h3>
                                <p className="desc">Delivering prosperity through continental trade</p>
                                <button className="btn btn-register btn-outline-light">Register</button>
                                <div className="rotate-text">
                                    <p>Who is attending ?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-slider">
                    <div className="bg-img">
                        <img src={bgImg3} alt="bg-image"/>
                    </div>
                    <div className="hero-content">
                        <div className="container">
                            <div className="content">
                                <h3 className="titleCap">AfCTFA:</h3>
                                <h3 className="title">From ambition to action </h3>
                                <p className="desc">Energy security For industrialisation fgfg</p>
                                <button className="btn btn-register btn-outline-light">Register</button>
                                <div className="rotate-text">
                                    <p>Who is attending ?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>

        </div>
    );
};

export default HeroSection;
