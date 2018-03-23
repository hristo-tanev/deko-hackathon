import React, {Component} from 'react';
import {test} from './actions/appActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ApplicantContainer from './components/applicant_container';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.test();
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
        test,
    }, dispatch)
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(App);
