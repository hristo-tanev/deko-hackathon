
import React, {Component} from 'react';
import Header from './components/header';
import ApplicantIndex from './pages/index';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>All Applicants</h1>
        <ApplicantIndex />
      </div>
    );
  }
}

export default App;