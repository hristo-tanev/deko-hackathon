
import React, {Component} from 'react';
import {getCandidates} from './actions/appActions';
import {connect} from 'react-redux';
import Header from './components/header';
import {bindActionCreators} from 'redux';
import ApplicantIndex from './pages/index';
import './styles/index.css';

class App extends Component {
  componentWillMount() {
    this.props.actions.getCandidates();
  }


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

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        getCandidates,
    }, dispatch)
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(App);
