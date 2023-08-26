import React from "react";
import './Card.css';
import Aleatorio from "../basicos/Aleatorio";

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#e5262d',
        borderColor: props.color || '#e5262d'
    }

    return(
        <div className='Card' style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    ) 
}