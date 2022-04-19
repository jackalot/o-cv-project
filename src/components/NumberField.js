import React, { Component } from "react";

class NumberField extends React.Component {
    render () {
        return <div>
            <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
        <input className={this.props.className} id={this.props.fieldName} type="number"></input>
        </div>
    }
}
export default NumberField;