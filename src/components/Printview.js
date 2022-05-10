import React, { useState } from 'react';
import DateField from "./DateField";
import TextField from "./TextField";
import '../styles/Views.css';
import '../styles/Lists.css';
import '../styles/Edits.css';
function GeneralInformation (props) {
    const [editing, setEditing] = useState(false);
    function changeEditing () {
        if(editing === false)
        {
            setEditing(true);
        }
        else
        {
            setEditing(false);
        }
    }
    if(editing === false)
    {
        return <div className='PrintView-GeneralInformation-List'>
            <h1>General Information</h1>
            <button onClick={changeEditing}>Edit Section</button>
            <ul>
                <li>Name: {props.generalInformation.name}</li>
                <li>Email: {props.generalInformation.email}</li>
                <li>Phone Number: {props.generalInformation.phoneNumber}</li>
            </ul>
            </div>
    }
    else
    {
        return <div className='PrintView-GeneralInformation-Edit'>
             <h1>General Information</h1>
             <ul>
                 <li>Old Info</li>
                <li>Name: {props.generalInformation.name}</li>
                <li>Email: {props.generalInformation.email}</li>
                <li>Phone Number: {props.generalInformation.phoneNumber}</li>
            </ul>
            <h2>Please add the new info. For anything you would like to remain the same, type it in again.</h2>
            <TextField defaultValue={props.generalInformation.name} handler={props.handleName} fieldName="name" className="our-name" labelText="What is your name?"></TextField>
            <label htmlFor="yourEmail">Please Enter Your Email Address:</label>
            <input defaultValue={props.generalInformation.email} onChange={props.handleEmail} className="your-email" id="yourEmail" type='email'></input>
            <label htmlFor="phoneNumber">Please enter a phone number</label>
            <input defaultValue={props.generalInformation.phoneNumber} onChange={props.handlePhoneNumber} className="phone-number" type="tel" placeholder="+1 123-456-789" pattern="[0-9]{3}-[0-9]{3}-{0-9}{4}"></input>
            <button onClick={changeEditing}>Submit Changes</button>
        </div>
    }

}
function EducationalExperience (props) {
    const [editing, setEditing] = useState(false);
    function changeEditing () {
        if(editing === false)
        {
            setEditing(true);
        }
        else
        {
            setEditing(false);
        }
    }
    if(editing === false)
    {
        return <div className='PrintView-EducationalExperience-List'>
        <h1>Educational Experience</h1>
        <button onClick={changeEditing}>Edit Section</button>
        <ul>
               <li>School Name: {props.educationalExperience.schoolName}</li>
               <li>Title of Study: {props.educationalExperience.titleOfStudy}</li>
               <li>Date Of Study: {props.educationalExperience.dateOfStudy}</li>
        </ul>
        </div>
    }
    else
    {
        return <div className='PrintView-EducationalExperience-Edit'>
            <h1>Educational Experience</h1>
            <ul>
                <li>Old Info</li>
               <li>School Name: {props.educationalExperience.schoolName}</li>
               <li>Title of Study: {props.educationalExperience.titleOfStudy}</li>
               <li>Date Of Study: {props.educationalExperience.dateOfStudy}</li>
            </ul>
            <h2>Please add the new info. For anything you would like to remain the same, type it in again.</h2>
            <TextField defaultValue={props.educationalExperience.schoolName} handler={props.handleSchoolName} fieldName="school-name" className="school-name" labelText="What is the school's name?"></TextField>
            <TextField defaultValue={props.educationalExperience.titleOfStudy} handler={props.handleTitleOfStudy} fieldName="title-of-study" className="study-title" labelText="What is the title of what you studied?"></TextField>
            <DateField defaultValue={props.educationalExperience.dateOfStudy} handler={props.handleDateOfStudy} fieldName="dateOfStudy" className="study-date" labelText="When did you study here?"></DateField>
            <button onClick={changeEditing}>Submit Changes</button>
        </div>
    }

}
function PracticalExperience (props) {
    const [editing, setEditing] = useState(false);
    function changeEditing () {
        if(editing === false)
        {
            setEditing(true);
        }
        else
        {
            setEditing(false);
        }
    }
    if(editing === false)
    {
        return <div className='PrintView-PracticalExperience-List'>
            <h1>Practical Experience</h1>
            <button onClick={changeEditing}>Edit Section</button>
            <ul>
               <li>Company Name: {props.practicalExperience.companyName}</li>
               <li>Position Title: {props.practicalExperience.positionTitle}</li>
               <li>Main Tasks: {props.practicalExperience.mainTasks}</li>
               <li>Start Date: {props.practicalExperience.startDate}</li>
               <li>End Date: {props.practicalExperience.endDate}</li>
            </ul>
        </div>
    }
    else
    {
        return <div className='PrintView-PracticalExperience-Edit'>
            <h1>Practical Experience</h1>
            <ul>
                <li>Old Info</li>
               <li>Company Name: {props.practicalExperience.companyName}</li>
               <li>Position Title: {props.practicalExperience.positionTitle}</li>
               <li>Main Tasks: {props.practicalExperience.mainTasks}</li>
               <li>Start Date: {props.practicalExperience.startDate}</li>
               <li>End Date: {props.practicalExperience.endDate}</li>
            </ul>
            <h2>Please add the new info. For anything you would like to remain the same, type it in again.</h2>
            <TextField defaultValue={props.practicalExperience.companyName} handler={props.handleCompanyName} fieldName="companyName" className="company-name" labelText="What is the name of your current/last company?"></TextField>
            <TextField defaultValue={props.practicalExperience.positionTitle} handler={props.handlePositionTitle} fieldName="positionTitle" className="position-title" labelText="What is the title of your position at that company?"></TextField>
            <TextField defaultValue={props.practicalExperience.mainTasks} handler={props.handleMainTasks} fieldName="mainTasks" className="main-tasks" labelText="What were your main tasks at that company?"></TextField>
            <DateField defaultValue={props.practicalExperience.startDate} handler={props.handleStartDate} fieldName="startDate" className="start-Date" labelText="When did you start working at this position?"></DateField>
            <DateField defaultValue={props.practicalExperience.endDate} handler={props.handleEndDate} fieldName="endDate" className="end-Date" labelText="When did you stop working at this position?"></DateField>
            <button onClick={changeEditing}>Submit Changes</button>
        </div>
    }

}
function PrintView (props) {
    return <div className='PrintView'>
            <GeneralInformation
            generalInformation = {props.generalInformation}
            
            /* For editing General Information */
            handleName = {props.handleName}
            handleEmail = {props.handleEmail}
            handlePhoneNumber = {props.handlePhoneNumber}
            ></GeneralInformation>
            <EducationalExperience
             educationalExperience = {props.educationalExperience}
              /* For editing Educational Experience */
             handleSchoolName = {props.handleSchoolName}
             handleTitleOfStudy = {props.handleTitleOfStudy}
             handleDateOfStudy = {props.handleDateOfStudy}>
            </EducationalExperience>
            <PracticalExperience
            practicalExperience = {props.practicalExperience}
            /* For Editing Practical Experience */
            handleCompanyName = {props.handleCompanyName}
            handlePositionTitle = {props.handlePositionTitle}
            handleMainTasks = {props.handleMainTasks}
            handleStartDate = {props.handleStartDate}
            handleEndDate = {props.handleEndDate}></PracticalExperience> 
        </div>
}
export default PrintView;