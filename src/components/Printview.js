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
    stopEditing = () => {
        if(this.state.editing === true)
        {
            this.setState({
                editing : false,
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
                    <li>Phone Number: {this.props.generalInformation.phoneNumber}</li>
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
                    <li>Phone Number: {this.props.generalInformation.phoneNumber}</li>
                </ul>
                <h2>Please add the new info. For anything you would like to remain the same, type it in again.</h2>
                <TextField defaultValue={this.props.generalInformation.name} handler={this.props.handleName} fieldName="name" className="our-name" labelText="What is your name?"></TextField>
                <label htmlFor="yourEmail">Please Enter Your Email Address:</label>
                <input defaultValue={this.props.generalInformation.email} onChange={this.props.handleEmail} className="your-email" id="yourEmail" type='email'></input>
                <label htmlFor="phoneNumber">Please enter a phone number</label>
                <input defaultValue={this.props.generalInformation.phoneNumber} onChange={this.props.handlePhoneNumber} className="phone-number" type="tel" placeholder="+1 123-456-789" pattern="[0-9]{3}-[0-9]{3}-{0-9}{4}"></input>
                <button onClick={this.stopEditing}>Submit Changes</button>
            </div>
        }
    }
}
class EducationalExperience extends React.Component {
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
    stopEditing = () => {
        if(this.state.editing === true)
        {
            this.setState({
                editing : false,
            })
        }
    }
    render() {
        if(this.state.editing === false)
        {
            return <div>
            <h1>Educational Experience</h1>
            <button onClick={this.startEditing}>Edit Section</button>
            <ul>
                   <li>School Name: {this.props.educationalExperience.schoolName}</li>
                   <li>Title of Study: {this.props.educationalExperience.titleOfStudy}</li>
                   <li>Date Of Study: {this.props.educationalExperience.dateOfStudy}</li>
            </ul>
            </div>
        }
        else
        {
            return <div>
                <h1>Educational Experience</h1>
                <ul>
                    <li>Old Info</li>
                   <li>School Name: {this.props.educationalExperience.schoolName}</li>
                   <li>Title of Study: {this.props.educationalExperience.titleOfStudy}</li>
                   <li>Date Of Study: {this.props.educationalExperience.dateOfStudy}</li>
                </ul>
                <h2>Please add the new info. For anything you would like to remain the same, type it in again.</h2>
                <TextField defaultValue={this.props.educationalExperience.schoolName} handler={this.props.handleSchoolName} fieldName="school-name" className="school-name" labelText="What is the school's name?"></TextField>
                <TextField defaultValue={this.props.educationalExperience.titleOfStudy} handler={this.props.handleTitleOfStudy} fieldName="title-of-study" className="study-title" labelText="What is the title of what you studied?"></TextField>
                <DateField defaultValue={this.props.educationalExperience.dateOfStudy} handler={this.props.handleDateOfStudy} fieldName="dateOfStudy" className="study-date" labelText="When did you study here?"></DateField>
                <button onClick={this.stopEditing}>Submit Changes</button>
            </div>
        }
    }
}
class PracticalExperience extends React.Component {
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
    stopEditing = () => {
        if(this.state.editing === true)
        {
            this.setState({
                editing : false,
            })
        }
    }
    render() {
        if(this.state.editing === false)
        {
            return <div className='PrintView-PracticalExperience-List'>
                <h1>Practical Experience</h1>
                <button onClick={this.startEditing}>Edit Section</button>
                <ul>
                   <li>Company Name: {this.props.practicalExperience.companyName}</li>
                   <li>Position Title: {this.props.practicalExperience.positionTitle}</li>
                   <li>Main Tasks: {this.props.practicalExperience.mainTasks}</li>
                   <li>Start Date: {this.props.practicalExperience.startDate}</li>
                   <li>End Date: {this.props.practicalExperience.endDate}</li>
                </ul>
            </div>
        }
        else
        {
            return <div className='PrintView-PracticalExperience-Edit'>
                <h1>Practical Experience</h1>
                <ul>
                    <li>Old Info</li>
                   <li>Company Name: {this.props.practicalExperience.companyName}</li>
                   <li>Position Title: {this.props.practicalExperience.positionTitle}</li>
                   <li>Main Tasks: {this.props.practicalExperience.mainTasks}</li>
                   <li>Start Date: {this.props.practicalExperience.startDate}</li>
                   <li>End Date: {this.props.practicalExperience.endDate}</li>
                </ul>
                <h2>Please add the new info. For anything you would like to remain the same, type it in again.</h2>
                <TextField defaultValue={this.props.practicalExperience.companyName} handler={this.props.handleCompanyName} fieldName="companyName" className="company-name" labelText="What is the name of your current/last company?"></TextField>
                <TextField defaultValue={this.props.practicalExperience.positionTitle} handler={this.props.handlePositionTitle} fieldName="positionTitle" className="position-title" labelText="What is the title of your position at that company?"></TextField>
                <TextField defaultValue={this.props.practicalExperience.mainTasks} handler={this.props.handleMainTasks} fieldName="mainTasks" className="main-tasks" labelText="What were your main tasks at that company?"></TextField>
                <DateField defaultValue={this.props.practicalExperience.startDate} handler={this.props.handleStartDate} fieldName="startDate" className="start-Date" labelText="When did you start working at this position?"></DateField>
                <DateField defaultValue={this.props.practicalExperience.endDate} handler={this.props.handleEndDate} fieldName="endDate" className="end-Date" labelText="When did you stop working at this position?"></DateField>
                <button onClick={this.stopEditing}>Submit Changes</button>
            </div>
        }
    }
}
class PrintView extends React.Component {
    render() {
        return <div className='PrintView'>
            <GeneralInformation
            generalInformation = {this.props.generalInformation}
            /* For editing General Information */
            handleName = {this.props.handleName}
            handleEmail = {this.props.handleEmail}
            handlePhoneNumber = {this.props.handlePhoneNumber}
            ></GeneralInformation>
            <EducationalExperience
             educationalExperience = {this.props.educationalExperience}
              /* For editing Educational Experience */
             handleSchoolName = {this.props.handleSchoolName}
             handleTitleOfStudy = {this.props.handleTitleOfStudy}
             handleDateOfStudy = {this.props.handleDateOfStudy}>
            ></EducationalExperience>
            <PracticalExperience
            practicalExperience = {this.props.practicalExperience}
            /* For Editing Practical Experience */
            handleCompanyName = {this.props.handleCompanyName}
            handlePositionTitle = {this.props.handlePositionTitle}
            handleMainTasks = {this.props.handleMainTasks}
            handleStartDate = {this.props.handleStartDate}
            handleEndDate = {this.props.handleEndDate}></PracticalExperience>
        </div>
    }
}
export default PrintView;