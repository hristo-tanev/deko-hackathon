import React, { Component } from 'react';
import logo from './logo.svg';
import NewApplicant from './components/new_applicant';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewApplicant />

      </div>
    );
  }
}

export default App;
