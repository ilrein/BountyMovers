import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Register extends Component {
  render() {
    return (
      <form className="register">
        <h2>Register</h2>
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
          <RaisedButton
            onTouchTap={() => console.log('call register() here')}
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
