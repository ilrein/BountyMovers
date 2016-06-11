import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.register = this.register.bind(this);
  }

  register(e) {
    e.preventDefault();

    const emailAddress = this.refs.emailAddress.getValue();
    const password = this.refs.password.getValue();
    const passwordConfirmation = this.refs.passwordConfirmation.getValue();

    // some rudimentary validation logic here
    // won't even bother with emails during a prototype
    // maybe try AWS service if I have time?

    if (
      emailAddress.length > 0 &&
      password.length > 0 &&
      password === passwordConfirmation
    ) {
      // console.log('email is greater than 1 and passwords match');
      Accounts.createUser({
        email: emailAddress,
        password,
      }, () => {
        console.log('created user');
        FlowRouter.go('/dashboard');
      });
    } else {
      console.log('err');
    }
  }

  render() {
    return (
      <form className="register">
        <h2>Register</h2>
        <TextField
          hintText="Email address"
          fullWidth
          ref="emailAddress"
        />
        <br />
        <TextField
          hintText="Password"
          fullWidth
          type="password"
          ref="password"
        />
        <br />
        <TextField
          hintText="Password Confirmation"
          fullWidth
          type="password"
          ref="passwordConfirmation"
        />
        <div className="actions">
          <RaisedButton
            onTouchTap={this.register}
            label="Register"

          />
          <RaisedButton
            onTouchTap={() => FlowRouter.go('/')}
            label="Back to Login"
            primary
          />
        </div>
      </form>
    );
  }
}
