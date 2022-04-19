import React, { Component } from 'react';

class DateField extends React.Component {
    render() {
        return <div>
            <label htmlFor={this.props.fieldName}></label>
        </div>
    }
}
export default DateField;