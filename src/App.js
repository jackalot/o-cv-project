
import React, { useState } from 'react';
import './App.css';
import OverView from './components/Overview';
import PrintView from './components/Printview';
function App (props) {
  const [submiting, setSubmiting] = useState(false);
  const [generalInformation, setGeneralInformation] = useState(
     { 
       name: "John",
       email: "john@emailaddress.com",
       phoneNumber: "+1 123-456-789"
     }
   )
  const [educationalExperience, setEducationalExperience] = useState({
     schoolName: 'Sample School',
     titleOfStudy: 'Sample Title Of Study',
     dateOfStudy: 'Date Of Study',
  })
  const [practicalExperience, setPracticalExperience] = useState({
   companyName: "sample company",
   positionTitle: 'sample position',
   mainTasks: 'sample main tasks',
   startDate: '1-31-2000',
   endDate: '1-31-2000'
  })
  submitInputs = () => {
    if(submiting === false)
    {
      setSubmiting(true);
    }
  }
  /* General Information Handle function */
  handleName = (newName) => {
    setGeneralInformation({
        name: newName.target.value,
       email: generalInformation.email,
       phoneNumber: generalInformation.phoneNumber
    })
  }
  /* General Information Handle function */
  handleEmail = (newEmail) => {
    setGeneralInformation({
      name: generalInformation.name,
     email: newEmail,
     phoneNumber: generalInformation.phoneNumber
    })
  }
  /* General Information Handle function */
  handlePhoneNumber = (newPhoneNumber) => {
    setGeneralInformation({
      name: generalInformation.name,
     email: generalInformation.email,
     phoneNumber: newPhoneNumber
    })
  }
  /* Educational Experience Handle function */
  handleSchoolName = (newSchoolName) => {
    setEducationalExperience({
      schoolName: newSchoolName,
      titleOfStudy: educationalExperience.titleOfStudy,
      dateOfStudy: educationalExperience.dateOfStudy,
    })
  }
   /* Educational Experience Handle function */
   handleTitleOfStudy = (newTitleOfStudy) => {
    setEducationalExperience({
      schoolName: educationalExperience.schoolName,
      titleOfStudy: newTitleOfStudy,
      dateOfStudy: educationalExperience.dateOfStudy,
    })
  }
  /* Educational Experience Handle function */
  handleDateOfStudy = (newDateOfStudy) => {
    setEducationalExperience({
      schoolName: educationalExperience.schoolName,
      titleOfStudy: educationalExperience.titleOfStudy,
      dateOfStudy: newDateOfStudy,
    })
  }
  /* Practical Experience Handle function */
  handleCompanyName = (newCompanyName) => {
    setPracticalExperience({
      companyName: newCompanyName,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  practicalExperience.startDate,
      endDate:  practicalExperience.endDate
    })
  }
  /* Practical Experience Handle function */
   handlePositionTitle = (newPositionTitle) => {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: newPositionTitle,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  practicalExperience.startDate,
      endDate:  practicalExperience.endDate
    })
  }
     /* Practical Experience Handle function */
  handleMainTasks = (newMainTasks) => {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  newMainTasks,
      startDate:  practicalExperience.startDate,
      endDate:  practicalExperience.endDate
    })
  }
   /* Practical Experience Handle function */
  handleStartDate = (newStartDate) => {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  newStartDate,
      endDate:  practicalExperience.endDate
    })
  }
   /* Practical Experience Handle function */
  handleEndDate = (newEndDate) => {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  practicalExperience.startDate,
      endDate:  newEndDate
    })
  }
  if(submiting === false)
  {
    return (
      <div className="App">
        <form>
        <OverView
        /* General Information */
        handleName = {handleName}
        handleEmail = {handleEmail}
        handlePhoneNumber = {handlePhoneNumber}
        /* Practical Experience */
        handleCompanyName = {handleCompanyName}
        handlePositionTitle = {handlePositionTitle}
        handleMainTasks = {handleMainTasks}
        handleStartDate = {handleStartDate}
        handleEndDate = {handleEndDate}
        /* Educational Experience */
        handleSchoolName = {handleSchoolName}
        handleTitleOfStudy = {handleTitleOfStudy}
        handleDateOfStudy = {handleDateOfStudy}
        ></OverView>
        <input onClick={submitInputs} type='submit'></input>
        </form>
      </div>
    );
  }
  else
  {
    return  <div className="App">
      <PrintView
      generalInformation = {generalInformation}
      educationalExperience = {educationalExperience}
      practicalExperience = {practicalExperience}
      /* General Information */
      handleName = {handleName}
      handleEmail = {handleEmail}
      handlePhoneNumber = {handlePhoneNumber}
      /* Practical Experience */
      handleCompanyName = {handleCompanyName}
      handlePositionTitle = {handlePositionTitle}
      handleMainTasks = {handleMainTasks}
      handleStartDate = {handleStartDate}
      handleEndDate = {handleEndDate}
      /* Educational Experience */
      handleSchoolName = {handleSchoolName}
      handleTitleOfStudy = {handleTitleOfStudy}
      handleDateOfStudy = {handleDateOfStudy}
       ></PrintView>
    </div>
  }
}

export default App;
