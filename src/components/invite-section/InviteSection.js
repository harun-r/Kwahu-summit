import React from 'react';
import SectionHeader from "../section-header/SectionHeader";
import CardImgText from "../card-img-text/CardImgText";
import img1 from '../../assets/images/profiles/img-1.png';
import img2 from '../../assets/images/profiles/img-2.png';
import img3 from '../../assets/images/profiles/img-3.png';
import img4 from '../../assets/images/profiles/img-4.png';

const invite_list = [
    {
        name: 'H.E. Abdel Fattah El-Sisi',
        degi: 'President of the Arab Republic of Egypt',
        image: img4,
    },
    {
        name: 'H.E. Aziz Akhannouch',
        degi: 'Prime Minister of Morocco',
        image: img3,
    },
    {
        name: 'H.E. Mohamed Bazoum',
        degi: 'President of Niger',
        image: img2,
    },
    {
        name: 'H.E. Muhammadu Buhari',
        degi: 'President of the Federal Republic of Nigeria',
        image: img1,
    },
    {
        name: 'H.E. Abdel Fattah El-Sisi',
        degi: 'President of the Arab Republic of Egypt',
        image: img4,
    },
    {
        name: 'H.E. Aziz Akhannouch',
        degi: 'Prime Minister of Morocco',
        image: img3,
    },
    {
        name: 'H.E. Mohamed Bazoum',
        degi: 'President of Niger',
        image: img2,
    },
    {
        name: 'H.E. Muhammadu Buhari',
        degi: 'President of the Federal Republic of Nigeria',
        image: img1,
    },
    {
        name: 'H.E. Abdel Fattah El-Sisi',
        degi: 'President of the Arab Republic of Egypt',
        image: img4,
    },
    {
        name: 'H.E. Aziz Akhannouch',
        degi: 'Prime Minister of Morocco',
        image: img3,
    },
    {
        name: 'H.E. Mohamed Bazoum',
        degi: 'President of Niger',
        image: img2,
    },
    {
        name: 'H.E. Muhammadu Buhari',
        degi: 'President of the Federal Republic of Nigeria',
        image: img1,
    },
]

const InviteSection = (props) => {
    return (
        <div className="invite-section p-4">
            <SectionHeader title="Invited Heads of State"/>
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
                            {props.hideButton
                                ?<button className="btn btn-invite btn-outline-success">See all Invited Heads of State </button>
                                : null
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InviteSection;
