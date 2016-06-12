import React, { Component, PropTypes } from 'react';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class CreateModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forProfit: true,
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({ forProfit: !this.state.forProfit });
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
        disabled={this.props.createFormIsInvalid}
        onTouchTap={this.handleCreate}
      />,
    ];

    return (
      <Dialog
        title="Create a New Opportunity"
        actions={actions}
        modal
        open={this.props.open}
        autoScrollBodyContent
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
        <br />
        <TextField
          hintText="Total hours required"
          ref="hours"
        />
        <Checkbox
          label="For profit"
          className="checkbox"
          onCheck={this.handleCheck}
        />
        <TextField
          hintText="Rate per hour"
          ref="rate"
          disabled={this.state.forProfit}
        />
      </Dialog>
    );
  }
}

CreateModal.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  createFormIsInvalid: PropTypes.bool,
};
