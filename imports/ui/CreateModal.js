import React, { Component, PropTypes } from 'react';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class CreateModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.props.handleCancel}
      />,
      <FlatButton
        label="Submit"
        primary
        disabled={this.props.createFormIsValid}
        onTouchTap={this.handleCreate}
      />,
    ];

    return (
      <Dialog
        title="Create a New Opportunity"
        actions={actions}
        modal
        open={this.props.open}
      >
        <p>Enter the logistical details</p>
        <DatePicker
          hintText="Set the date"
          ref="date"
        />
        <TimePicker
          hintText="Set the time"
          ref="time"
        />
        <TextField
          hintText="Location"
          ref="location"
        />
        <p>Enter the description</p>
        <TextField
          hintText="Opportunity title"
          ref="title"
        />
        <br />
        <TextField
          hintText="Description"
          ref="description"
        />
      </Dialog>
    );
  }
}

CreateModal.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  createFormIsValid: PropTypes.bool,
};
