import React, { Component } from "react";

class TextField extends React.Component {
    state = {
        text: ''
    };
    handleInput = ( event ) => {
        this.setState({ text: event.target.value });
    };
    render() {
        if(this.props.handler)
        {
            return <div>
                <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
                <input onChange={this.props.handler} className={this.props.className} id={this.props.fieldName} type='text'></input>
            </div>
        }
        else
        {
            return <div>
            <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
            <input onChange={this.handleInput} className={this.props.className} id={this.props.fieldName} type='text'></input>
        </div>
        }
    }
}
export default TextField;