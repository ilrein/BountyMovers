import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
  render() {
    return (
      <form className="login">
        <TextField
          hintText="Hint Text"
        />
        <TextField
          hintText="Hint Text"
        />
        <RaisedButton label="Login" />
        <RaisedButton label="Register" primary />
      </form>
    );
  }
}
