import React from 'react';
import {Link} from "react-router-dom";
//Arrow img
//Logo
import Logo from '../../assets/images/logo.png'
//Social img
import FacebookIcon from '../../assets/images/socials/facebook.png'
import TwitterIcon from '../../assets/images/socials/twitter.png'
import LinkedinIcon from '../../assets/images/socials/linkedin.png'
import InstagramIcon from '../../assets/images/socials/instagram.png'
//Flags
import FlagEng from '../../assets/images/flags/english.png';
import FlagFrench from '../../assets/images/flags/french.png';
import FlagArabic from '../../assets/images/flags/arabic.png';
import FlagGerman from '../../assets/images/flags/germany.png';
import FlagPortuguese from '../../assets/images/flags/portuguese.png';
import FlagSpanish from '../../assets/images/flags/spain.png';

const Header = () => {
    return (
        <div className="main-header">
            <div className="container-fluid header-base">
                <div className="header-bottom">
                    <div className="header-left">
                        <div className="logo">
                            <Link to="/"><img src={Logo} alt="logo"/></Link>
                        </div>
                        <div className="register-button">
                            <button className="btn btn-outline-light">Register</button>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            About
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/about-summit">About the Summit</Link></li>
                                            <li><Link className="dropdown-item" to="/the-host">The host</Link></li>
                                            <li><Link className="dropdown-item" to="/">Media partners</Link></li>
                                            <li><Link className="dropdown-item" to="/sponsors">Sponsors</Link></li>
                                            <li><Link className="dropdown-item" to="/">Planning committee</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                            Who is attending
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/speakers">Invited Heads of State</Link></li>
                                            <li><Link className="dropdown-item" to="/invited-personalities">Invited Personalities</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                            Resources
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/news">News</Link></li>
                                            <li><Link className="dropdown-item" to="/">The AfCFTA</Link></li>
                                            <li><Link className="dropdown-item" to="/">The AU Agenda 2063</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                            Event guide
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/">Peduase</Link></li>
                                            <li><Link className="dropdown-item" to="/">Accra</Link></li>
                                            <li><Link className="dropdown-item" to="/">Protocols</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Help</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="header-top">
                    <div className="header-date">
                        <p>January 26th - 28th 2023</p>
                    </div>
                    <div className="header-top-right d-flex align-items-center">
                        <div className="language-dropdown dropdown">
                            <button className="btn text-white btn-flat dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <span className="flag-icon"><img src={FlagEng} alt="eng"/></span>
                                <span className="language-name">English</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        <span className="flag-icon"><img src={FlagEng} alt="eng"/></span>
                                        <span className="language-name">English</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        <span className="flag-icon"><img src={FlagArabic} alt="eng"/></span>
                                        <span className="language-name">Arabic</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        <span className="flag-icon"><img src={FlagFrench} alt="eng"/></span>
                                        <span className="language-name">French</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        <span className="flag-icon"><img src={FlagGerman} alt="eng"/></span>
                                        <span className="language-name">German</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        <span className="flag-icon"><img src={FlagPortuguese} alt="eng"/></span>
                                        <span className="language-name">Portuguese</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        <span className="flag-icon"><img src={FlagSpanish} alt="eng"/></span>
                                        <span className="language-name">Spanish</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="social-profiles">
                            <Link to="/">
                                <img src={FacebookIcon} alt="FacebookIcon"/>
                            </Link>
                            <Link to="/">
                                <img src={TwitterIcon} alt="TwitterIcon"/>
                            </Link>
                            <Link to="/">
                                <img src={LinkedinIcon} alt="LinkedinIcon"/>
                            </Link>
                            <Link to="/">
                                <img src={InstagramIcon} alt="InstagramIcon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
