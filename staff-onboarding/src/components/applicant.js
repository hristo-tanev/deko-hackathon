import React, { Component } from 'react';

class Applicant extends Component {
  constructor(props){
    super(props);
  }

  handClick(e){
    e.preventDefault();
    console.log('dicks');
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
