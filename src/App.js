
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
      practicalExperience: {
        companyName: "sample company",
        positionTitle: 'sample position',
        mainTasks: 'sample main tasks',
        startDate: '1-31-2000',
        endDate: '1-31-2000'
      },
    };
  }
  /* Practicle Experience Handle function */
   handleCompanyName = (newCompanyName) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        companyName: newCompanyName.target.value
      }
      });
  }
  /* Practicle Experience Handle function */
   handlePositionTitle = (newPositionTitle) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        positionTitle: newPositionTitle.target.value
      }
      });
  }
   /* Practicle Experience Handle function */
  handleMainTasks = (newMainTasks) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        mainTasks: newMainTasks.target.value
      }
      });
  }
   /* Practicle Experience Handle function */
   handleStartDate = (newStartDate) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        startDate: newStartDate.target.value
      }
      });
  }
   /* Practicle Experience Handle function */
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
        /* Practicle Experience */
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
