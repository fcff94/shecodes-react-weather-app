import React from "react";

function Input(props) {
    return <input
    type={props.type}
    className={`form-control ${props.customClass || ''}`}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
}

export default Input;