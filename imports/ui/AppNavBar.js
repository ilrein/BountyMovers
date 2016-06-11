import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

// Sidebar
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <AppBar
        title="BountyMovers"
        onLeftIconButtonTouchTap={this.handleToggle}
      >
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </AppBar>
    );
  }
}

export default AppNavBar;
