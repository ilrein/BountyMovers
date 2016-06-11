// Main rendering libraries
import React from 'react';
import { mount } from 'react-mounter';

// Layouts
import MainLayout from '../imports/layouts/MainLayout';

// Pages
import Home from '../imports/ui/Home';

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
