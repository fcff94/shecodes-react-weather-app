import React from "react";
import "./Button.css";

function Button(props) {
  return <button type={props.type} className={`Button btn btn-primary ${props.customClass || ''}`} onClick={props.onClick}>
  {props.value}
</button>;
}

export default Button;
