import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewCandidate} from '../actions/appActions';
import './styles/new_applicant.css';


class NewApplicant extends Component {
      constructor(props) {
          super(props);

          this.state = {
              firstName: '',
              lastName: '',
              position: '',
              phone: '',
              email: '',
              stages: []
          };

          this.add = this.add.bind(this);
          this.getFirstName = this.getFirstName.bind(this);
          this.getLastName = this.getLastName.bind(this);
          this.getPosition = this.getPosition.bind(this);
          this.getPhone = this.getPhone.bind(this);
          this.getEmail = this.getEmail.bind(this);
          this.getStages = this.getStages.bind(this);
      }

    add() {
      const {stages} = this.state;
      const newStages = stages.map((stage) => {
          return {
              type: stage
          };
      });

      this.props.actions.addNewCandidate({...this.state, stages: newStages});
    }

    getFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    getLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    getPosition(e) {
        this.setState({
            position: e.target.value
        });
    }

    getPhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    getEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    getStages(e) {
        this.setState({
            stages: e.target.value.split(',')
        });
    }

  render(){
    const {
        firstName,
        lastName,
        position,
        phone,
        email,
        stages
    } = this.state;

    return (
      <div>
        <label>First name: </label>
        <input type='text' onChange={this.getFirstName} value={firstName} />
        <label>Last name: </label>
        <input type='text' onChange={this.getLastName} value={lastName} />
        <label>Position: </label>
        <input type='text' onChange={this.getPosition} value={position} />
        <label>Phone: </label>
        <input type='text' onChange={this.getPhone} value={phone} />
        <label>Email: </label>
        <input type='text' onChange={this.getEmail} value={email} />
        <label>Stages: </label>
        <input type='text' onChange={this.getStages} value={stages.join(',')} />
        <button type='submit' onClick={this.add}>Add! </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        addNewCandidate,
    }, dispatch)
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(NewApplicant);
