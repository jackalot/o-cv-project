import React from 'react';
import DateField from "./DateField";
import TextField from "./TextField";
class GeneralInformation extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            editing: false,
        }
    }
    startEditing = () => {
        if(this.state.editing === false)
        {
            this.setState({
                editing : true,
            })
        }
    }
    render() {
        if(this.state.editing === false)
        {
            return <div>
                <h1>General Information</h1>
                <button onClick={this.startEditing}>Edit Section</button>
                <ul>
                    <li>Name: {this.props.generalInformation.name}</li>
                    <li>Email: {this.props.generalInformation.email}</li>
                    <li>Name: {this.props.generalInformation.phoneNumber}</li>
                </ul>
                </div>
        }
        else
        {
            return <div>
                 <h1>General Information</h1>
                 <ul>
                     <li>Old Info</li>
                    <li>Name: {this.props.generalInformation.name}</li>
                    <li>Email: {this.props.generalInformation.email}</li>
                    <li>Name: {this.props.generalInformation.phoneNumber}</li>
                </ul>
                <h2>Please add the new info. For anything you would like to remain the same, type it in again.</h2>
                <TextField handler={this.props.handleName} fieldName="name" className="our-name" labelText="What is your name?"></TextField>
                <label htmlFor="yourEmail">Please Enter Your Email Address:</label>
                <input onChange={this.props.handleEmail} className="your-email" id="yourEmail" type='email'></input>
                <label htmlFor="phoneNumber">Please enter a phone number</label>
                <input onChange={this.props.handlePhoneNumber} className="phone-number" type="tel" placeholder="+1 123-456-789" pattern="[0-9]{3}-[0-9]{3}-{0-9}{4}"></input>
            </div>
        }
    }
}
class EducationalExperience extends React.Component {
    render() {
        return <div>
        <h1>Educational Experience</h1>
        <ul>
               <li>School Name: {this.props.educationalExperience.schoolName}</li>
               <li>Title of Study: {this.props.educationalExperience.titleOfStudy}</li>
               <li>Date Of Study: {this.props.educationalExperience.dateOfStudy}</li>
        </ul>
        </div>
    }
}
class PracticalExperience extends React.Component {
    render() {
        return <div>
            <h1>Practical Experience</h1>
            <ul>
               <li>Company Name: {this.props.practicalExperience.companyName}</li>
               <li>Position Title: {this.props.practicalExperience.positionTitle}</li>
               <li>Main Tasks: {this.props.practicalExperience.mainTasks}</li>
               <li>Start Date: {this.props.practicalExperience.startDate}</li>
               <li>End Date: {this.props.practicalExperience.endDate}</li>
            </ul>
        </div>
    }
}
class PrintView extends React.Component {
    render() {
        return <div>
            <GeneralInformation
            generalInformation = {this.props.generalInformation}
            /* For editing General Information */
            handleName = {this.props.handleName}
            handleEmail = {this.props.handleEmail}
            handlePhoneNumber = {this.props.handlePhoneNumber}
            ></GeneralInformation>
            <EducationalExperience
             educationalExperience = {this.props.educationalExperience}
            ></EducationalExperience>
            <PracticalExperience
            practicalExperience = {this.props.practicalExperience}></PracticalExperience>
        </div>
    }
}
export default PrintView;