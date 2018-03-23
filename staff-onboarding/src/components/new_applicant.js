import React, { Component } from 'react';


export default class NewApplicant extends Component {
  render(){
    return (
      <form>
        <label>Name: </label>
        <input type='text' />

        <label>Position: </label>
        <input type='text' />

        <label>CV: </label>
        <input type='text' />
        <label>Phone: </label>

        <input type='text' />
        <label>Email: </label>
        <input type='text' />

        <label>Stages: </label>
        <input type='text' />

        <button type='submit'>Add! </button>
      </form>
      )
  }
}

