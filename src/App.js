
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
    };
  }
  
  render() {
    return (
      <div className="App">
        <form>
        <OverView></OverView>
        <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
