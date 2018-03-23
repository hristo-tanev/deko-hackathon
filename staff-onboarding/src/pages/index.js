import React, { Component } from 'react';
import Applicant from '../components/applicant';
import {getCandidates} from '../actions/appActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ApplicantIndex extends Component {
  componentWillMount() {
      this.props.actions.getCandidates();
  }

  render() {
    const candidates = this.props.candidates.map((candidate, key) => {
       return <Applicant key={key} info={candidate} />;
    });
    return (
      <div className='applicant-index'>
          {candidates}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        candidates: state.app.candidates
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        getCandidates,
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplicantIndex);

