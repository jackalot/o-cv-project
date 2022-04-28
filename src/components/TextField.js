import React, { Component } from "react";

class TextField extends React.Component {
    
    render() {
        if(this.props.handler)
        {
            return <div>
                <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
                <input onChange={this.props.handler} className={this.props.className} id={this.props.fieldName} defaultValue={this.props.defaultValue} type='text'></input>
            </div>
        }
    }
}
export default TextField;