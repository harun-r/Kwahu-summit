import React from 'react';
import Icon1 from '../../assets/images/icons/email.png';
import Icon2 from '../../assets/images/icons/phone.png';
import Icon3 from '../../assets/images/icons/location.png';
const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="help-contact">
                            <div className="form-item">
                                <label>Your first and name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label>Your email</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label>Your message</label>
                                <textarea type="textarea" className="form-control"></textarea>
                            </div>
                            <div className="form-item form-checkbox">
                                <input type="checkbox" id="agree"/>
                                <label htmlFor="agree">I agree with terms and conditions</label>
                            </div>
                            <div className="form-item">
                                <input className="form-submit" type="submit" value="Submit"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <div className="contact-detail">
                            <h3>
                                Contact us
                            </h3>
                            <ul>
                                <li>
                                    <span><img src={Icon1} alt="icon"/></span>
                                    <span>info@kwahusummit.com</span>
                                </li>
                                <li>
                                    <span><img src={Icon2} alt="icon"/></span>
                                    <span>+233 302 737 879</span>
                                </li>
                                <li>
                                    <span><img src={Icon3} alt="icon"/></span>
                                    <span>#5, 4th Dade Walk, Labone - Accra, Ghana</span>
                                </li>
                            </ul>
                            <p>
                                The weather in Ghana at this time of the year will be sunny, hot and humid with the occasional thunderstorm or morning shower and temperatures around 31oF/24oC.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
