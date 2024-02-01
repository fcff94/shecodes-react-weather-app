import React from "react";

export default function Text(props) {
    const TxtElement = props.type;
    return (
      <>
        <TxtElement className={`custom-text ${props.fontSizeClass || ""} ${props.fontWeightClass || ""} ${props.colorClass || ""}`}>{props.value}</TxtElement>
        {/* {(props.type === "p" || props.type === "span" ) &&
        <p className={`custom-text ${props.fontSizeClass | ''} ${props.fontWeightClass | ''} ${props.colorClass | ''}`}>{props.value}</p>
        }
         {(props.type !== "p" || props.type !== "span") &&
        <Header className={`custom-header ${props.fontSizeClass | ''} ${props.fontWeightClass | ''} ${props.colorClass | ''}`}>{props.value}</Header>
        } */}
      </>
    );
};
