// Main rendering libraries
import React from 'react';
import { mount } from 'react-mounter';

// Layouts
import MainLayout from '../imports/layouts/MainLayout';

// Pages
import Home from '../imports/ui/Home';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//-------
// Routes
//-------

// Home route
FlowRouter.route('/', {
  action() {
    console.log('hello');
    mount(MainLayout, {
      content: (<Home />),
    });
  },
});
