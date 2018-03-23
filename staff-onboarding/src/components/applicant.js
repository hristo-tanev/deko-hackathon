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

    const allStages = stages.map((stage, key) => {
       return <span key={key}>{stage.type}</span>
    });

    return(
        <div className='applicant-card'>
          <div>position: {position}</div>
          <div>name: {firstname} {lastname}</div>
          <div>cv:</div>
          <div>phone: {phone}</div>
          <div>email: {email}</div>
          <div>
            {allStages}
          </div>
          <button onClick={this.handleClick}>Show applicant</button>
        </div>
      )
  }
}

export default Applicant;
