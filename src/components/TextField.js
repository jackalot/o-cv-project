import React, { Component } from "react";

class TextField extends React.Component {
    state = {
        input: "Sample",
    }
    handleInput = (newInput) => {
        this.setState({ input: newInput.target.value})
    }
    render() {
        return <div>
            <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
            <input onChange={this.handleInput} className={this.props.className} id={this.props.fieldName} type='text'></input>
        </div>
    }
}
export default TextField;