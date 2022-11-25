import React from 'react';
import SectionHeader from "../section-header/SectionHeader";
import CardIconText from "../card-icon-text/CardIconText";
import Icon from '../../assets/images/icons/head.png'
import Icon2 from '../../assets/images/icons/captain.png'
import Icon3 from '../../assets/images/icons/personality.png'
const WhoAttending = () => {
    return (
        <div className="who-attending-section p-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 col-md-6">
                        <div className="content">
                            <SectionHeader
                                hint="The speakers"
                                title="Who is attending"
                            />
                            <div>
                                <p>At the Africa Prosperity Dialogues, Africa’s business leaders and politicians will “take that walk together”. There will be the opportunity to discuss the threats to trade and commerce that could be mitigated by government interventions in one shape or form</p>
                                <p>Also on the table will be economic opportunities and how governments can partner with business leaders to unlock them for the mutual benefit of business and government, and ultimately, for improving upon the living conditions of the citizens.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-md-6">
                                <CardIconText
                                    Icon={Icon}
                                    title="Heads of State"
                                />
                            </div>
                            <div className="col-md-6">
                                <CardIconText
                                    Icon={Icon2}
                                    title="Captains of Industry"
                                />
                            </div>
                            <div className="col-md-6">
                                <CardIconText
                                    Icon={Icon3}
                                    title="Notable Personalities"
                                />
                            </div>
                            <div className="col-md-6">
                                <CardIconText
                                    Icon={Icon}
                                    title="Heads of State"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoAttending;
