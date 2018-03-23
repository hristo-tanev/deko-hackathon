import React, { Component } from 'react';
import NewApplicant from '../components/new_applicant';
import Header from '../components/header';

class New extends Component {
  render (){
    return (
        <div>
          <Header />
          <NewApplicant/>
        </div>
      )
  }
}

export default New;
