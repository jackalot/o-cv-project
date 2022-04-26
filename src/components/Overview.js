import React, { Component } from "react";
import NumberField from "./NumberField";
import DateField from "./DateField";
import TextField from "./TextField";
class PracticalExperience extends React.Component {
  render () {
    return <div>
      <h1>Practical Experience</h1>
      <TextField handler={this.props.handleCompanyName} fieldName="companyName" className="company-name" labelText="What is the name of your current/last company?"></TextField>
      <TextField handler={this.props.handlePositionTitle} fieldName="positionTitle" className="position-title" labelText="What is the title of your position at that company?"></TextField>
      <TextField handler={this.props.handleMainTasks} fieldName="mainTasks" className="main-tasks" labelText="What were your main tasks at that company?"></TextField>
      <DateField handler={this.props.handleStartDate} fieldName="startDate" className="start-Date" labelText="When did you start working at this position?"></DateField>
      <DateField handler={this.props.handleEndDate} fieldName="endDate" className="end-Date" labelText="When did you stop working at this position?"></DateField>
    </div>
  }
}
class EducationalExperience extends React.Component {
  render () {
    return <div>
      <h1>Educational Experience</h1>
      <TextField handler={this.props.handleSchoolName} fieldName="school-name" className="school-name" labelText="What is the school's name?"></TextField>
      <TextField handler={this.props.handleTitleOfStudy} fieldName="title-of-study" className="study-title" labelText="What is the title of what you studied?"></TextField>
      <DateField handler={this.props.handleDateOfStudy} fieldName="dateOfStudy" className="study-date" labelText="When did you study here?"></DateField>
    </div>
  }
}
class GeneralInformation extends React.Component {
  render () {
    return <div>
      <h1>General Information</h1>
       <TextField handler={this.props.handleName} fieldName="name" className="our-name" labelText="What is your name?"></TextField>
       <label htmlFor="yourEmail">Please Enter Your Email Address:</label>
       <input className="your-email" id="yourEmail" type='email'></input>
       <label htmlFor="phoneNumber">Please enter a phone number</label>
        <input className="phone-number" type="tel" placeholder="+1 123-456-789" pattern="[0-9]{3}-[0-9]{3}-{0-9}{4}"></input>
    </div>
  }
}
class OverView extends React.Component {
    render () {
      {console.log(this.props)}
      return <div>
        <GeneralInformation
        handleName = {this.props.handleName}
        handleEmail = {this.props.handleEmail}
        handlePhoneNumber = {this.props.handlePhoneNumber}
        ></GeneralInformation>
        <EducationalExperience
         handleSchoolName = {this.props.handleSchoolName}
         handleTitleOfStudy = {this.props.handleTitleOfStudy}
         handleDateOfStudy = {this.props.handleDateOfStudy}></EducationalExperience>
        <PracticalExperience 
        handleCompanyName = {this.props.handleCompanyName}
        handlePositionTitle = {this.props.handlePositionTitle}
        handleMainTasks = {this.props.handleMainTasks}
        handleStartDate = {this.props.handleStartDate}
        handleEndDate = {this.props.handleEndDate} ></PracticalExperience>
      </div>
    }
}
export default OverView;