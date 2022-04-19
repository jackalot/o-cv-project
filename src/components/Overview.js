import React, { Component } from "react";
import NumberField from "./NumberField";
import DateField from "./DateField";
class OverView extends React.Component {
    render () {
      return <div>
        <label htmlFor="phoneNumber">Please enter a phone number</label>
        <input className="phone-number" type="tel"></input>
      </div>
    }
}
export default OverView;