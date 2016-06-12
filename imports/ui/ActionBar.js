import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import OpportunitiesCountContainer from '../containers/OpportunitiesCountContainer';

export default class ActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
          />
        </div>
      </div>
    );
  }
}
