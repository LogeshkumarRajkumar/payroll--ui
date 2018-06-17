import React, { Component } from 'react';
import './Registration.css';
import { Button, FormControl, Label } from 'react-bootstrap';
import { postRequest } from './Service'
class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      company_name: '',
      error_message: {},
      success_message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    this.setState({ error_message: '', success_message: '' });
      postRequest(this.state, this.textInput.value)
      .then(response => {
        if(response.successMessage)
          this.setState({ success_message: response.successMessage });
        else
          this.setState({ error_message: response.errorMessages });
      });
  }

  render() {
    return (
      <div style={{ background: 'mintcream' }}>
        <div className="Register">
          <div>
            <Label className="error">{this.state.error_message['first_name']}</Label>
          </div>
          <div>
            <Label className="label"> First Name </Label>
            <FormControl onChange={this.handleChange} name="first_name" className="form-control" placeholder="Enter First name"></FormControl>
          </div>

          <div>
            <Label className="error">{this.state.error_message['last_name']}</Label>
          </div>
          <div>
            <Label className="label"> Last Name </Label>
            <FormControl onChange={this.handleChange} name="last_name" className="form-control" placeholder="Enter last name"></FormControl>
          </div>

          <div>
            <Label className="error">{this.state.error_message['email']}</Label>
          </div>
          <div>
            <Label className="label"> Email </Label>
            <FormControl onChange={this.handleChange} name="email" className="form-control" placeholder="Enter valid email-id"></FormControl>
          </div>

          <div>
            <Label className="error">{this.state.error_message['name']}</Label>
          </div>
          <div>
            <Label className="label"> Company Name </Label>
            <FormControl onChange={this.handleChange} name="company_name" className="form-control" placeholder="Enter your organisation name"></FormControl>
          </div>

          <div>
            <Label className="error">{this.state.error_message['password']}</Label>
          </div>
          <div>
            <Label className="label"> Password </Label>
            <FormControl inputRef={input => this.textInput = input}
              id="Password" label="Password" type="password" className="form-control" placeholder="Strong password please!" />
          </div>
          <Button onClick={this.onSubmit} className="button" bsStyle="success">Register</Button>

          <div>
            <Label className="success">{this.state.success_message}</Label>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
