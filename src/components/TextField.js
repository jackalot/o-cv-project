import React, { Component } from "react";

class TextField extends React.Component {
    state = {
        input: "Sample",
    }
    render() {
        return <div>
            <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
            <input onChange={this.props.handler} className={this.props.className} id={this.props.fieldName} type='text'></input>
        </div>
    }
}
export default TextField;