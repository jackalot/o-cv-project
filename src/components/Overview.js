import React, { Component } from "react";
import NumberField from "./NumberField";
import DateField from "./DateField";
import TextField from "./TextField";
class GeneralInformation extends React.Component {
  render () {
    return <div>
      
    </div>
  }
}
class OverView extends React.Component {
    render () {
      return <div>
        <label htmlFor="phoneNumber">Please enter a phone number</label>
        <input className="phone-number" type="tel" placeholder="+1 123-456-789" pattern="[0-9]{3}-[0-9]{3}-{0-9}{4}"></input>
        <DateField fieldName="dateOfStudy" className="date-of-study" labelText="When did you study here?"></DateField>
        <TextField fieldName="name" className="our-name" labelText="What is your name?"></TextField>
      </div>
    }
}
export default OverView;