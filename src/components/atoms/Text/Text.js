import React from "react";
import "./Text.css";

export default function Text(props) {
    const TxtElement = props.type;
    const inlineStyles = {
        fontSize: `${props.fontSize}px`
    }
    return (
      <>
        <TxtElement style={inlineStyles || ""} className={`custom-text ${props.customClass || ""} ${props.fontSizeClass || ""} ${props.fontWeightClass || ""} ${props.colorClass || "white"}`}>{props.value}</TxtElement>
      </>
    );
};
