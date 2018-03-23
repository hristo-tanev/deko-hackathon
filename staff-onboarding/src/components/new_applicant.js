import React, { Component } from 'react';
import './styles/new_applicant.css';

export default class NewApplicant extends Component {
  render(){
    return (
      <form>
        <h1>Add new candidate</h1>
        <div>
          <label>Name: </label>
          <input type='text' />
        </div>
        <div>
          <label>Position: </label>
          <input type='text' />
        </div>
        <div>
          <label>CV: </label>
          <input type='text' />
        </div>
        <div>
          <label>Phone: </label>
          <input type='text' />
        </div>
        <div>
          <label>Email: </label>
          <input type='text' />
        </div>
        <div>
          <label>Stages: </label>
          <input type='text' />
        </div>
        <div>
          <button type='submit' className='btn btn-primary'>Add! </button>
        </div>
      </form>
      )
  }
}

