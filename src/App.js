
import React from 'react';
import './App.css';
import OverView from './components/Overview';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInformation: {
        name: "John",
        email: "john@emailaddress.com",
        phoneNumber: "+1 123-456-789"
      },
      educationalExperience: {
        schoolName: 'Sample School',
        titleOfStudy: 'Sample Title Of Study',
        dateOfStudy: 'Date Of Study',
      },
      practicalExperience: {
        companyName: "sample company",
        positionTitle: 'sample position',
        mainTasks: 'sample main tasks',
        startDate: '1-31-2000',
        endDate: '1-31-2000'
      },
    };
  }
  /* Practical Experience Handle function */
   handleCompanyName = (newCompanyName) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        companyName: newCompanyName.target.value
      }
      });
  }
  /* Practical Experience Handle function */
   handlePositionTitle = (newPositionTitle) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        positionTitle: newPositionTitle.target.value
      }
      });
  }
   /* Practical Experience Handle function */
  handleMainTasks = (newMainTasks) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        mainTasks: newMainTasks.target.value
      }
      });
  }
   /* Practical Experience Handle function */
   handleStartDate = (newStartDate) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        startDate: newStartDate.target.value
      }
      });
  }
   /* Practical Experience Handle function */
   handleEndDate = (newEndDate) => {
    this.setState({ endDate: newEndDate.target.value})
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        endDate: newEndDate.target.value
      }
      });
  }
  render() {
    return (
      <div className="App">
        <form>
        <OverView
        /* Practical Experience */
        handleCompanyName = {this.handleCompanyName}
        handlePositionTitle = {this.handlePositionTitle}
        handleMainTasks = {this.handleMainTasks}
        handleStartDate = {this.handleStartDate}
        handleEndDate = {this.handleEndDate}
        ></OverView>
        <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
