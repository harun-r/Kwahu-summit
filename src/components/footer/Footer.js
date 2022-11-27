import React from 'react';
import {Link} from "react-router-dom";
import footerLogo from '../../assets/images/footer-logo.png';
import instagram from '../../assets/images/socials/instagram-green.png';
import facebook from '../../assets/images/socials/facebook-green.png';
import twitter from '../../assets/images/socials/twitter-green.png';
const Footer = () => {
    return (
        <div className="footer-section p-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-top">
                            <div className="footer-newsletter">
                                <h3>Stay connected</h3>
                                <div className="newsletter-box">
                                    <span>Your email</span>
                                    <div className="d-flex">
                                        <input className="form-control" type="text" placeholder="example@site.com"/>
                                        <button className="btn btn-submit btn-secondary">Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-logo">
                                <img src={footerLogo} alt="footer logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="footer-center">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="footer-links">
                                        <div className="footer-link-item">
                                            <h3>&nbsp;</h3>
                                            <ul>
                                                <li><Link to="/">The Host </Link></li>
                                                <li><Link to="/">Partners  </Link></li>
                                                <li><Link to="/">The Summit</Link></li>
                                            </ul>
                                        </div>
                                        <div className="footer-link-item">
                                            <h3>Who is attending</h3>
                                            <ul>
                                                <li><Link to="/">Captains of Industry </Link></li>
                                                <li><Link to="/">Heads of State  </Link></li>
                                                <li><Link to="/">Notable Personalities</Link></li>
                                            </ul>
                                        </div>
                                        <div className="footer-link-item">
                                            <h3>Resourses</h3>
                                            <ul>
                                                <li><Link to="/">News  </Link></li>
                                                <li><Link to="/">The AfCFTA  </Link></li>
                                                <li><Link to="/">The AU Agenda 2063</Link></li>
                                            </ul>
                                        </div>
                                        <div className="footer-link-item">
                                            <h3>Event guide</h3>
                                            <ul>
                                                <li><Link to="/">Peduase  </Link></li>
                                                <li><Link to="/">Accra   </Link></li>
                                                <li><Link to="/">Protocols</Link></li>
                                            </ul>
                                        </div>
                                        <div className="footer-link-item no-title">
                                            <ul>
                                                <li><Link to="/">Contact us  </Link></li>
                                                <li><Link to="/">Privacy policy   </Link></li>
                                                <li><Link to="/">Terms and conditions</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer-copy">
                                        <ul>
                                            <li><Link to="/"><img src={instagram} alt="instagram"/></Link></li>
                                            <li><Link to="/"><img src={facebook} alt="facebook"/></Link></li>
                                            <li><Link to="/"><img src={twitter} alt="twitter"/></Link></li>
                                        </ul>
                                        <p>Copyright &copy; 2023. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="footer-bottom">
                            <p>Developed by <Link to="/">Peges Inc</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
