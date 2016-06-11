// Main rendering libraries
import React from 'react';
import { mount } from 'react-mounter';

// Layouts
// import MainLayout from '../imports/layouts/MainLayout';
import BasicLayout from '../imports/layouts/BasicLayout';

// Pages
import Home from '../imports/ui/Home';
import Register from '../imports/ui/Register';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//-------
// Routes
//-------

// Home route
FlowRouter.route('/', {
  action() {
    mount(BasicLayout, {
      content: (<Home />),
    });
  },
});

// Register route
FlowRouter.route('/register', {
  action() {
    mount(BasicLayout, {
      content: (<Register />),
    });
  },
});
