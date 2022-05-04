import React, { Component } from "react";

function TextField (props) {
    if(props.handler)
    {
        return <div>
            <label htmlFor={props.fieldName}>{props.labelText}</label>
            <input onChange={props.handler} className={props.className} id={props.fieldName} defaultValue={props.defaultValue} type='text'></input>
        </div>
    }
}
export default TextField;