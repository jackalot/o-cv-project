import React, { Component } from "react";

class TextField extends React.Component {
    render() {
        return <div>
            <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
        </div>
    }
}
export default TextField;