
import React from 'react';
import './App.css';
import OverView from './components/Overview';
class App extends React.Component {
  onSubmitTask = () => {

  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitTask}>
        <OverView></OverView>
        <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default App;
