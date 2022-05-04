import React, { Component } from 'react';

function DateField (props) {
    return <div>
        <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
        <input onChange={this.props.handler} className={this.props.className} id={this.props.fieldName} defaultValue={this.props.defaultValue} type='date'></input>
    </div>
}
export default DateField;