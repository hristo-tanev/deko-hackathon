import React, { Component } from 'react';
import Applicant from '../components/applicant';

class ApplicantIndex extends Component {
  render() {
    return (
      <div className='applicant-index'>
        <Applicant />
        <Applicant />
        <Applicant />
        <Applicant />
        <Applicant />
      </div>
    )
  }
}

export default ApplicantIndex;
