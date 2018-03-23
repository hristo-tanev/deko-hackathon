import React, {Component} from 'react';
import {getCandidates} from './actions/appActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ApplicantContainer from './components/applicant_container';

class App extends Component {
  componentWillMount() {
    this.props.actions.getCandidates();
  }

  render() {
    return (
      <div className="App">
        <ApplicantContainer />
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
