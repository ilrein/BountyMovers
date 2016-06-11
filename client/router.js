// Main rendering libraries
import React from 'react';
import { mount } from 'react-mounter';
import { Tracker } from 'meteor/tracker'; // eslint-disable-line

// Layouts
import MainLayout from '../imports/layouts/MainLayout';
import BasicLayout from '../imports/layouts/BasicLayout';

// Pages
import TestPage from '../imports/ui/TestPage';
import Home from '../imports/ui/Home';
import Register from '../imports/ui/Register';
import Dashboard from '../imports/ui/Dashboard';

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

// Dashboard route
FlowRouter.route('/dashboard', {
  action() {
    mount(MainLayout, {
      content: (<Dashboard />),
    });
  },
});

// test page
FlowRouter.route('/test', {
  action() {
    mount(MainLayout, {
      content: (<TestPage />),
    });
  },
});

// Force login page if not authenticated
Tracker.autorun(() => {
  if (!Meteor.userId()) {
    FlowRouter.go('/');
  }
});
