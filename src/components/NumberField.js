import React, { Component } from "react";

function NumberField (props)
{
    return <div>
        <label htmlFor={props.fieldName}>{props.labelText}</label>
        <input className={props.className} id={props.fieldName} type="number"></input>
    </div>
}
export default NumberField;