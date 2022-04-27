import React from 'react';
class GeneralInformation extends React.Component {
    render() {
       return <div>
           <h1>General Information</h1>
           <ul>
               <li>Name: {this.props.generalInformation.name}</li>
               <li>Email: {this.props.generalInformation.email}</li>
               <li>Name: {this.props.generalInformation.phoneNumber}</li>
           </ul>
           </div>
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
        return <h1>Practical Experience</h1>
    }
}
class PrintView extends React.Component {
    render() {
        return <div>
            <GeneralInformation
            generalInformation = {this.props.generalInformation}
            ></GeneralInformation>
            <EducationalExperience
             educationalExperience = {this.props.educationalExperience}
            ></EducationalExperience>
            <PracticalExperience></PracticalExperience>
        </div>
    }
}
export default PrintView;