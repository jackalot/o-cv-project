
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
  handlePracticleExperience = (newPracticalExperience) => {
    function handlePositionTitle (newPositionTitle) {
      this.setState({ positionTitle: newPositionTitle.target.value})
    }
    function handleMainTasks (newMainTasks) {
      this.setState({ mainTasks: newMainTasks.target.value})
    }
    function handleStartDate (newStartDate) {
      this.setState({ startDate: newStartDate.target.value})
    }
    function handleEndDate (newEndDate) {
      this.setState({ endDate: newEndDate.target.value})
    }
    return { handlePositionTitle, handleMainTasks, handleStartDate, handleEndDate}
  }
   handleCompanyName = (newCompanyName) => {
    this.setState({
      practicalExperience: {
        ...this.state.practicalExperience,
        companyName: newCompanyName.target.value
      }
      });
  }
  render() {
    return (
      <div className="App">
        <form>
        <OverView handleCompanyName = {this.handleCompanyName}></OverView>
        <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
