import React from "react";
import "./Input.css";

function Input(props) {
    return <input
    type={props.type}
    className={`inputComponent form-control ${props.customClass || ''}`}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
}

export default Input;