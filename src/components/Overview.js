import React, { Component } from "react";
import NumberField from "./NumberField";
import DateField from "./DateField";
import TextField from "./TextField";
class PracticalExperience extends React.Component {
  constructor (props)
  {
    super(props)
    this.state  = { 
      companyName: "sample company",
      positionTitle: 'sample position',
      mainTasks: 'sample main tasks',
      startDate: '1-31-2000',
      endDate: '1-31-2000'
    }
  }
  handleCompanyName = (newCompanyName) => {
    this.setState({ companyName: newCompanyName.target.value})
  }
  handlePositionTitle = (newPositionTitle) => {
    this.setState({ positionTitle: newPositionTitle.target.value})
  }
  handleMainTasks = (newMainTasks) => {
    this.setState({ mainTasks: newMainTasks.target.value})
  }
  render () {
    return <div>
      <h1>Practical Experience</h1>
      <TextField handler={this.handleCompanyName} fieldName="companyName" className="company-name" labelText="What is the name of your current/last company?"></TextField>
      <TextField handler={this.handlePositionTitle} fieldName="positionTitle" className="position-title" labelText="What is the title of your position at that company?"></TextField>
      <TextField handler={this.handleMainTasks} fieldName="mainTasks" className="main-tasks" labelText="What were your main tasks at that company?"></TextField>
      <DateField fieldName="startDate" className="start-Date" labelText="When did you start working at this position?"></DateField>
      <DateField fieldName="endDate" className="end-Date" labelText="When did you stop working at this position?"></DateField>
    </div>
  }
}
class EducationalExperience extends React.Component {
  render () {
    return <div>
      <h1>Educational Experience</h1>
      <TextField fieldName="school-name" className="school-name" labelText="What is the school's name?"></TextField>
      <TextField fieldName="title-of-study" className="study-title" labelText="What is the title of what you studied?"></TextField>
      <DateField fieldName="dateOfStudy" className="study-date" labelText="When did you study here?"></DateField>
    </div>
  }
}
class GeneralInformation extends React.Component {
  render () {
    return <div>
      <h1>General Information</h1>
       <TextField fieldName="name" className="our-name" labelText="What is your name?"></TextField>
       <label htmlFor="yourEmail">Please Enter Your Email Address:</label>
       <input className="your-email" id="yourEmail" type='email'></input>
       <label htmlFor="phoneNumber">Please enter a phone number</label>
        <input className="phone-number" type="tel" placeholder="+1 123-456-789" pattern="[0-9]{3}-[0-9]{3}-{0-9}{4}"></input>
    </div>
  }
}
class OverView extends React.Component {
    render () {
      return <div>
        <GeneralInformation></GeneralInformation>
        <EducationalExperience></EducationalExperience>
        <PracticalExperience></PracticalExperience>
      </div>
    }
}
export default OverView;