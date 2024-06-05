import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className={`cardComponent ${props.customClass || ""}`}>
            {props.content}
        </div>
    )
};

export default Card;
