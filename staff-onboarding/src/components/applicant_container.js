import React, { Component } from 'react';
import Applicant from './applicant';

class ApplicantContainer extends Component {
  render() {
    return (
      <div>
        <Applicant />
        <Applicant />
        <Applicant />
        <Applicant />
        <Applicant />
      </div>
    )
  }
}

export default ApplicantContainer;
