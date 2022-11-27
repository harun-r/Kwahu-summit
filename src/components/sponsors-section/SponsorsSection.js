import React from 'react';
import SectionHeader from "../section-header/SectionHeader";
import icon1 from '../../assets/images/sponsor/sponsor-1.png';
import icon2 from '../../assets/images/sponsor/sponsor-2.png';
import icon3 from '../../assets/images/sponsor/sponsor-3.png';
import icon4 from '../../assets/images/sponsor/sponsor-4.png';
import icon5 from '../../assets/images/sponsor/sponsor-5.png';
import icon6 from '../../assets/images/sponsor/sponsor-6.png';
import icon7 from '../../assets/images/sponsor/sponsor-7.png';
import icon8 from '../../assets/images/sponsor/sponsor-8.png';
import icon9 from '../../assets/images/sponsor/sponsor-9.png';
const sponsor_lists = [
    {
        name: 'Lead SponsorS',
        icons:[
            {
                icon_name:icon1,
                icon_class: 'icon-big'
            }
        ]
    },
    {
        name: 'Platinum Sponsor:',
        icons:[
            {
                icon_name: icon2,
                icon_class: 'icon-md'
            },
            {
                icon_name: icon3,
                icon_class: 'icon-md'
            },
            {
                icon_name: icon4,
                icon_class: 'icon-md'
            }
        ]
    },
    {
        name: 'Diamond Sponsor:',
        icons:[
            {
                icon_name: icon5,
                icon_class: 'icon-sm'
            },
            {
                icon_name: icon6,
                icon_class: 'icon-sm'
            },
            {
                icon_name: icon7,
                icon_class: 'icon-sm'
            },
            {
                icon_name: icon8,
                icon_class: 'icon-sm'
            },
            {
                icon_name: icon9,
                icon_class: 'icon-sm'
            }
        ]
    },

]
const SponsorsSection = () => {
    return (
        <div className="sponsor-section">
           <SectionHeader title="Sponsors"/>
            <div className="sponsor-box">
                {
                    sponsor_lists.map((sponsor,index)=>(
                        <div className="sponsor-item" key={index}>
                            <p>{sponsor.name}</p>
                            <div className="sponsor-icons">
                                {
                                    sponsor.icons.map((icon,index)=>(
                                        <div className="sponsor-icon" key={index}>
                                            <img className={icon.icon_class} src={icon.icon_name} alt={icon.icon_name}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SponsorsSection;
