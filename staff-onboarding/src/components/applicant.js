import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Applicant extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
  }

  render(){
    return(
        <div className='applicant-card'>
          <span>position: {this.props.position}</span>
          <span>name: {this.props.name}</span>
          <span>cv: {this.props.cv}</span>
          <span>phone: {this.props.phone}</span>
          <span>email: {this.props.email}</span>
          <span>current stage: {this.props.stage}</span>
          <button onClick={this.handleClick}>Show applicant</button>
        </div>
      )
  }
}

export default Applicant;
