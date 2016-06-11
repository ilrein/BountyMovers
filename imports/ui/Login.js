import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    const emailAddress = this.refs.emailAddress.getValue();
    const password = this.refs.password.getValue();
    Meteor.loginWithPassword(emailAddress, password, () => {
      // if the user is logged in successfully, redirect
      if (Meteor.userId()) {
        FlowRouter.go('/dashboard');
      }
    });
  }

  render() {
    return (
      <form className="login">
        <h2>Login</h2>
        <TextField
          hintText="Email Address"
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
        <div className="actions">
          <RaisedButton
            label="Login"
            onTouchTap={this.login}
          />
          <RaisedButton
            onTouchTap={() => FlowRouter.go('/register')}
            label="Register an Account"
            primary
          />
        </div>
      </form>
    );
  }
}
