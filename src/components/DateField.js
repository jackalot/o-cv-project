import React, { Component } from 'react';

function DateField (props) {
    return <div>
        <label htmlFor={props.fieldName}>{props.labelText}</label>
        <input onChange={props.handler} className={props.className} id={props.fieldName} defaultValue={props.defaultValue} type='date'></input>
    </div>
}
export default DateField;