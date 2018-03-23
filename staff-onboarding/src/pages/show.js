import React, { Component } from 'react';
import Header from '../components/header';

class Show extends Component {
  render (){
    return (
      <div>
        <Header />
        <h1>applicant: {this.props.name}</h1>
        <span>position: {this.props.position}</span>
        <span>cv: {this.props.cv}</span>
        <span>phone: {this.props.phone}</span>
        <span>email: {this.props.email}</span>
        <span>current stage: {this.props.stage}</span>
      </div>
      )
  }
}

export default Show;
