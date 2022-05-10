
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
  function submitInputs () {
    if(submiting === false)
    {
      setSubmiting(true);
    }
    else
    {
      setSubmiting(false);
    }
  }
  /* General Information Handle function */
  function handleName(newName) {
    setGeneralInformation({
        name: newName.target.value,
       email: generalInformation.email,
       phoneNumber: generalInformation.phoneNumber
    })
  }
  /* General Information Handle function */
  function handleEmail (newEmail) {
    setGeneralInformation({
      name: generalInformation.name,
     email: newEmail.target.value,
     phoneNumber: generalInformation.phoneNumber
    })
  }
  /* General Information Handle function */
  function handlePhoneNumber (newPhoneNumber) {
    setGeneralInformation({
      name: generalInformation.name,
     email: generalInformation.email,
     phoneNumber: newPhoneNumber.target.value
    })
  }
  /* Educational Experience Handle function */
  function handleSchoolName (newSchoolName) {
    setEducationalExperience({
      schoolName: newSchoolName.target.value,
      titleOfStudy: educationalExperience.titleOfStudy,
      dateOfStudy: educationalExperience.dateOfStudy,
    })
  }
   /* Educational Experience Handle function */
   function handleTitleOfStudy(newTitleOfStudy) {
    setEducationalExperience({
      schoolName: educationalExperience.schoolName,
      titleOfStudy: newTitleOfStudy.target.value,
      dateOfStudy: educationalExperience.dateOfStudy,
    })
  }
  /* Educational Experience Handle function */
  function handleDateOfStudy(newDateOfStudy) {
    setEducationalExperience({
      schoolName: educationalExperience.schoolName,
      titleOfStudy: educationalExperience.titleOfStudy,
      dateOfStudy: newDateOfStudy.target.value,
    })
  }
  /* Practical Experience Handle function */
  function handleCompanyName(newCompanyName) {
    setPracticalExperience({
      companyName: newCompanyName.target.value,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  practicalExperience.startDate,
      endDate:  practicalExperience.endDate
    })
  }
  /* Practical Experience Handle function */
  function handlePositionTitle(newPositionTitle) {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: newPositionTitle.target.value,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  practicalExperience.startDate,
      endDate:  practicalExperience.endDate
    })
  }
     /* Practical Experience Handle function */
  function handleMainTasks(newMainTasks) {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  newMainTasks.target.value,
      startDate:  practicalExperience.startDate,
      endDate:  practicalExperience.endDate
    })
  }
   /* Practical Experience Handle function */
  function handleStartDate(newStartDate) {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  newStartDate.target.value,
      endDate:  practicalExperience.endDate
    })
  }
   /* Practical Experience Handle function */
   function handleEndDate(newEndDate) {
    setPracticalExperience({
      companyName: practicalExperience.companyName,
      positionTitle: practicalExperience.positionTitle,
      mainTasks:  practicalExperience.mainTasks,
      startDate:  practicalExperience.startDate,
      endDate:  newEndDate.target.value
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
