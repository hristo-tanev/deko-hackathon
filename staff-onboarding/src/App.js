import React, { Component } from 'react';
import logo from './logo.svg';
import NewApplicant from './components/new_applicant';
import Applicant from './components/applicant';
import ApplicantContainer from './components/applicant_container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApplicantContainer />
      </div>
    );
  }
}

export default App;
