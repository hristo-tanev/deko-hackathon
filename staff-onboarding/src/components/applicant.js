import React, { Component } from 'react';

class Applicant extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
  }

  render(){
    const {
      firstname,
      lastname,
      email,
      phone,
      position,
      stages
    } = this.props.info;

    return(
        <div className='applicant-card'>
          <span>position: {position}</span>
          <span>name: {firstname} {lastname}</span>
          <span>cv:</span>
          <span>phone: {phone}</span>
          <span>email: {email}</span>
          <button onClick={this.handleClick}>Show applicant</button>
        </div>
      )
  }
}

export default Applicant;
