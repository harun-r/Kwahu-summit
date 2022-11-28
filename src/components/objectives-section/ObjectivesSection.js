import React from 'react';
import SectionHeader from "../section-header/SectionHeader";
import CardIconText from "../card-icon-text/CardIconText";
import icon1 from '../../assets/images/icons/hand.png';
import icon2 from '../../assets/images/icons/up.png';
import icon3 from '../../assets/images/icons/bank.png';
import icon4 from '../../assets/images/icons/busniess.png';
import icon5 from '../../assets/images/icons/users.png';
const ObjectivesSection = () => {
    return (
        <div className="objectives-section p-4">
            <SectionHeader hint="The specific objectives of the Kwahu Summit are to:" title="OBJECTIVES"/>
            <div className="objective-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <CardIconText
                                Icon={icon1}
                                desc="Foster collaboration among African states and businesses to drive investment and develop intra-African trade."
                            />
                        </div>
                        <div className="col-md-4">
                            <CardIconText
                                Icon={icon2}
                                desc="Develop deliberate and sustainable measures to grow Africa into a manufacturing powerhouse."
                            />
                        </div>
                        <div className="col-md-4">
                            <CardIconText
                                Icon={icon3}
                                desc="Create an efective platform for businesses and political leaders to build strategic partnerships and empower African businesses to build Africa."
                            />
                        </div>
                        <div className="col-md-4">
                            <CardIconText
                                Icon={icon4}
                                desc="Create opportunities for business collaboration, which places Africa’s development first."
                            />
                        </div>
                        <div className="col-md-4">
                            <CardIconText
                                Icon={icon5}
                                desc="Become the most sought-after event for political and business lead ers, entrepreneurs and innovators in Africa and beyond."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectivesSection;
