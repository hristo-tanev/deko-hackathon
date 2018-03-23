
import React, {Component} from 'react';
import {test} from './actions/appActions';
import {connect} from 'react-redux';
import Header from './components/header';
import {bindActionCreators} from 'redux';
import ApplicantIndex from './pages/index';

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
        <Header />
        <h1>All Applicants</h1>
        <ApplicantIndex />
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
