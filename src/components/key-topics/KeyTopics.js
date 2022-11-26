import React from 'react';
import SectionHeader from "../section-header/SectionHeader";
import CardKeyTopic from "../card-key-topic/CardKeyTopic";
import img1 from '../../assets/images/key-topic/key-topic-1.png';
import img2 from '../../assets/images/key-topic/key-topic-2.png';
import img3 from '../../assets/images/key-topic/key-topic-3.png';
import img4 from '../../assets/images/key-topic/key-topic-4.png';
import img5 from '../../assets/images/key-topic/key-topic-5.png';

const KeyTopics = () => {
    return (
        <div className="key-topic-section p4">
            <SectionHeader title="Key topics"/>
            <div className="key-topic">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <CardKeyTopic
                                image={img1}
                                title="Energy Security"
                            />
                        </div>
                        <div className="col-md-4">
                            <CardKeyTopic
                                image={img2}
                                title="Technology and Innovation"
                            />
                        </div>
                        <div className="col-md-4">
                            <CardKeyTopic
                                image={img3}
                                title="Financing Trade across borders"
                            />
                        </div>
                        <div className="col-md-6">
                            <CardKeyTopic
                                image={img4}
                                title="Legal and Institutional Framework"
                            />
                        </div>
                        <div className="col-md-6">
                            <CardKeyTopic
                                image={img5}
                                title="FOOD SECURITY & AGRICULTURE"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyTopics;
