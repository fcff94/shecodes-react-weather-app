import React from "react";
import "./Text.css";

export default function Text(props) {
    const TxtElement = props.type;
    const symbol = props.symbol;
    const inlineStyles = {
        fontSize: `${props.fontSize}px`,
        fontWeight: `${props.fontWeight}`,
    }
    return (
      <>
        <TxtElement style={inlineStyles || ""} className={`custom-text ${props.customClass || ""} ${props.colorClass || ""}`}>{props.value}{props.symbol || ""}</TxtElement>
      </>
    );
};
