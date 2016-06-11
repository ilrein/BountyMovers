import React, { PropTypes } from 'react';

// Material themes
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Navbar
import BasicNavBar from '../ui/BasicNavBar';

const BasicLayout = ({ content }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <main className="basic-layout">
      <BasicNavBar />
      {content}
    </main>
  </MuiThemeProvider>
);

BasicLayout.propTypes = {
  content: PropTypes.node,
};

export default BasicLayout;
