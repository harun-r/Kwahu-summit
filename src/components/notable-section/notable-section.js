import React from 'react';
import SectionHeader from "../section-header/SectionHeader";
import CardImgText from "../card-img-text/CardImgText";
import img5 from '../../assets/images/profiles/img5.png'
import img6 from '../../assets/images/profiles/img6.png'
import img7 from '../../assets/images/profiles/img7.png'
import img8 from '../../assets/images/profiles/img8.png'

const invite_list = [
    {
        name: 'Aliko Dangote',
        degi: 'Chairman and CEO, Dangote Group',
        image: img5,
    },
    {
        name: 'H.E. Aziz Akhannouch',
        degi: 'Prime Minister of Morocco',
        image: img6,
    },
    {
        name: 'H.E. Mohamed Bazoum',
        degi: 'President of Niger',
        image: img7,
    },
    {
        name: 'H.E. Muhammadu Buhari',
        degi: 'President of the Federal Republic of Nigeria',
        image: img8,
    },
    {
        name: 'Aliko Dangote',
        degi: 'Chairman and CEO, Dangote Group',
        image: img5,
    },
    {
        name: 'H.E. Aziz Akhannouch',
        degi: 'Prime Minister of Morocco',
        image: img6,
    },
    {
        name: 'H.E. Mohamed Bazoum',
        degi: 'President of Niger',
        image: img7,
    },
    {
        name: 'H.E. Muhammadu Buhari',
        degi: 'President of the Federal Republic of Nigeria',
        image: img8,
    },
    {
        name: 'Aliko Dangote',
        degi: 'Chairman and CEO, Dangote Group',
        image: img5,
    },
    {
        name: 'H.E. Aziz Akhannouch',
        degi: 'Prime Minister of Morocco',
        image: img6,
    },
    {
        name: 'H.E. Mohamed Bazoum',
        degi: 'President of Niger',
        image: img7,
    },
    {
        name: 'H.E. Muhammadu Buhari',
        degi: 'President of the Federal Republic of Nigeria',
        image: img8,
    },
]

const NotableSection = () => {
    return (
        <div className="notable-section p-4">
            <SectionHeader title="notable personalities"/>
            <div className="cards">
                <div className="container-fluid">
                    <div className="row">
                        {
                            invite_list.map((invite, index)=>(
                                <div className="col-md-3" key={index}>
                                    <CardImgText
                                        name={invite.name}
                                        image={invite.image}
                                        degi={invite.degi}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-12">
                        <div className="cards-btn d-flex align-items-center justify-content-end mt-3">
                            <button className="btn btn-invite btn-outline-success">See all Invited Personalities </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotableSection;
