
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
    this.setState({ endDate: newPracticalExperience.target.value})
  }
  render() {
    return (
      <div className="App">
        <form>
        <OverView HandlePracticalExperience = {this.handlePracticleExperience}></OverView>
        <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
