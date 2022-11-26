import React from 'react';
import {Link} from "react-router-dom";

const CardKeyTopic = (props) => {
    return (
        <Link to="/" className="card-key-topic">
            <img src={props.image} alt={props.name}/>
            <span className="title">{props.title}</span>
        </Link>
    );
};

export default CardKeyTopic;
