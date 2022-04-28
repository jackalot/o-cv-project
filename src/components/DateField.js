import React, { Component } from 'react';

class DateField extends React.Component {
    render() {
        return <div>
            <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
            <input onChange={this.props.handler} className={this.props.className} id={this.props.fieldName} defaultValue={this.props.defaultValue} type='date'></input>
        </div>
    }
}
export default DateField;