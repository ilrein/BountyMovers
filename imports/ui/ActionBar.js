import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import OpportunitiesCountContainer from '../containers/OpportunitiesCountContainer';
import CreateModal from './CreateModal';

export default class ActionBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleCreateModal() {
    this.setState({ modalOpen: true });
  }

  handleSubmit() {
    this.setState({ modalOpen: false });
    this.props.addedNewOpp();
  }

  render() {
    return (
      <div className="action-bar">
        <div className="action-item">
          <div className="action-title">Total Opportunities</div>
          <OpportunitiesCountContainer />
          <RaisedButton
            label="Create Opportunity"
            secondary
            onTouchTap={this.toggleCreateModal}
          />
          <CreateModal
            open={this.state.modalOpen}
            handleCancel={this.closeModal}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

ActionBar.propTypes = {
  addedNewOpp: PropTypes.func,
};
