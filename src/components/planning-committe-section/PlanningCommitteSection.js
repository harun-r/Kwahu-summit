import React from 'react';
import SectionHeader from "../section-header/SectionHeader";
import CardPlCommitte from "../card-pl-committe/CardPlCommitte";
import Icon1 from '../../assets/images/icons/icon-1.png';
import Icon2 from '../../assets/images/icons/icon-2.png';
import Icon3 from '../../assets/images/icons/icon-3.png';
import Icon4 from '../../assets/images/icons/icon-4.png';
import Icon5 from '../../assets/images/icons/icon-5.png';

const PlanningCommitteSection = () => {
    return (
        <div className="planning-committee-section p-4">
            <SectionHeader
                title="Planning Committee"
            />
            <div className="desc">
                <p>The planning committee is made up of designated persons from all our partner organizations and associates:</p>
            </div>
            <div className="planning-sec-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <CardPlCommitte
                                icon={Icon1}
                                title="APN Board of Directors"
                            />
                        </div>
                        <div className="col-md-4">
                            <CardPlCommitte
                                icon={Icon2}
                                title="Office of the President of Ghana"
                            />
                        </div>
                        <div className="col-md-4">
                            <CardPlCommitte
                                icon={Icon3}
                                title="GIPC"
                            />
                        </div>
                        <div className="col-md-4">
                            <CardPlCommitte
                                icon={Icon4}
                                title="United Nations Economic Commission for Africa "
                            />
                        </div>
                        <div className="col-md-4">
                            <CardPlCommitte
                                icon={Icon5}
                                title="UNDP Regional Bureau for Africa"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanningCommitteSection;
