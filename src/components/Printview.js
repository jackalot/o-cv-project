import React from 'react';
class GeneralInformation extends React.Component {
    render() {
       return <div>
           <h1>General Information</h1>
           <ul>
               <li>Name: {this.props.generalInformation.name}</li>
           </ul>
           </div>
    }
}
class EducationalExperience extends React.Component {
    render() {
        return <h1>Educational Experience</h1>
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
            <EducationalExperience></EducationalExperience>
            <PracticalExperience></PracticalExperience>
        </div>
    }
}
export default PrintView;