import React from 'react';
import AppBar from 'material-ui/AppBar';
import { APP_NAME } from './Constants';

const BasicNavBar = () => (
  <AppBar
    title={APP_NAME}
    showMenuIconButton={false}
  />
);

export default BasicNavBar;
