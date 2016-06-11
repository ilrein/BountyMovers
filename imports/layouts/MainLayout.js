import React, { PropTypes } from 'react';

// Material themes
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MainLayout = ({ content }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <main>
      {content}
    </main>
  </MuiThemeProvider>
);

MainLayout.propTypes = {
  content: PropTypes.node,
};

export default MainLayout;
