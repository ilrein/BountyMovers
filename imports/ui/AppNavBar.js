import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import React, { Component } from 'react';

import { APP_NAME } from './Constants';
import AppBar from 'material-ui/AppBar';
import UserNameContainer from '../containers/UserNameContainer';

// Sidebar
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.onTouchTapLogout = this.onTouchTapLogout.bind(this);
  }

  onTouchTapLogout() {
    Meteor.logout();
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <AppBar
        title={APP_NAME}
        onLeftIconButtonTouchTap={this.handleToggle}
      >
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem disabled>
            <UserNameContainer />
          </MenuItem>
          <MenuItem onTouchTap={this.onTouchTapLogout}>Logout</MenuItem>
        </Drawer>
      </AppBar>
    );
  }
}

export default AppNavBar;
