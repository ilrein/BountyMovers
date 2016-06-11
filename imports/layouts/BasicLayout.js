import React, { PropTypes } from 'react';

// Material themes
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Navbar
import AppNavBar from '../ui/AppNavBar';

const BasicLayout = ({ content }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <main className="basic-layout">
      <AppNavBar />
      {content}
    </main>
  </MuiThemeProvider>
);

BasicLayout.propTypes = {
  content: PropTypes.node,
};

export default BasicLayout;
