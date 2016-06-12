import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import OpportunitiesCountContainer from '../containers/OpportunitiesCountContainer';
import CreateModal from './CreateModal';

export default class ActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      createFormIsValid: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.toggleCreateModal = this.toggleCreateModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleCreateModal() {
    console.log('clicked create');
    this.setState({ modalOpen: true });
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
            createFormIsValid={this.state.createFormIsValid}
          />
        </div>
      </div>
    );
  }
}
