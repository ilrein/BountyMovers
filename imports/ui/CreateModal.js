import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */

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
        disabled
        onTouchTap={this.handleCreate}
      />,
    ];

    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal
        open={this.props.open}
      >
        Only actions can close this dialog.
      </Dialog>
    );
  }
}

CreateModal.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
};
