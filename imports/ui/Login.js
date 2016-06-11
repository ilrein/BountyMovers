import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
  render() {
    return (
      <form className="login">
        <h2>Login</h2>
        <TextField
          hintText="Hint Text"
          fullWidth
        />
        <br />
        <TextField
          hintText="Hint Text"
          fullWidth
        />
        <div className="actions">
          <RaisedButton label="Login" />
          <RaisedButton
            onTouchTap={() => FlowRouter.go('/register')}
            label="Register"
            primary
          />
        </div>
      </form>
    );
  }
}