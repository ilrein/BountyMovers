import { Meteor } from 'meteor/meteor'; // eslint-disable-line
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
      date: new Date(),
      time: new Date(),
      location: null,
      title: null,
      description: null,
      hours: null,
      notForProfit: true,
      rate: null,
      createFormIsInvalid: true,
    };

    this.checkIfAllInputsAreValid = this.checkIfAllInputsAreValid.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setHours = this.setHours.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.setRate = this.setRate.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  setDate(non, date) {
    this.setState({
      date,
    });
    this.checkIfAllInputsAreValid();
  }

  setTime(non, time) {
    this.setState({
      time,
    });
    this.checkIfAllInputsAreValid();
  }

  setLocation(location) {
    this.setState({
      location: location.currentTarget.value,
    });
    this.checkIfAllInputsAreValid();
  }

  setTitle(title) {
    this.setState({
      title: title.currentTarget.value,
    });
    this.checkIfAllInputsAreValid();
  }

  setDescription(description) {
    this.setState({
      description: description.currentTarget.value,
    });
    this.checkIfAllInputsAreValid();
  }

  setHours(hours) {
    this.setState({
      hours: hours.currentTarget.value,
    });
    this.checkIfAllInputsAreValid();
  }

  handleCheck() { // eslint-disable-line
    this.setState({ notForProfit: !this.state.notForProfit });
  }

  setRate(rate) {
    this.setState({
      rate: rate.currentTarget.value,
    });
    this.checkIfAllInputsAreValid();
  }

  handleCreate() {
    // lets geocode the address
    // then store to the database
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      address: this.state.location,
    }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const updated = Object.assign({}, this.state, {
          position: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          },
        });
        Meteor.call('insertOpportunity', updated, (err) => {
          if (!err) {
            this.props.handleSubmit();
          }
        });
      } else {
        console.log('error', status);
      }
    });
  }

  checkIfAllInputsAreValid() {
    if (
      this.state.location !== null &&
      this.state.location !== '' &&
      this.state.time !== null &&
      this.state.title !== null &&
      this.state.description !== null
    ) {
      // console.log('all inputs are valid');
      this.setState({ createFormIsInvalid: false });
    } else {
      // console.log('inputs are not valid', this.state);
      this.setState({ createFormIsInvalid: true });
    }
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
        disabled={this.state.createFormIsInvalid}
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
          onChange={this.setDate}
        />
        <TimePicker
          hintText="Set the time"
          ref="time"
          onChange={this.setTime}
        />
        <TextField
          hintText="Location"
          ref="location"
          onChange={this.setLocation}
        />
        <p>Enter the description</p>
        <TextField
          hintText="Opportunity title"
          ref="title"
          onChange={this.setTitle}
        />
        <br />
        <TextField
          hintText="Description"
          ref="description"
          onChange={this.setDescription}
        />
        <br />
        <TextField
          hintText="Total hours required"
          ref="hours"
          onChange={this.setHours}
        />
        <Checkbox
          label="For profit"
          className="checkbox"
          onCheck={this.handleCheck}
        />
        <TextField
          hintText="Rate per hour $"
          ref="rate"
          disabled={this.state.notForProfit}
          onChange={this.setRate}
        />
      </Dialog>
    );
  }
}

CreateModal.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
};
