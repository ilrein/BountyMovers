import React from 'react';

// the core component of the app
import Map from './Map';
import ActionBar from './ActionBar';

const Dashboard = () => (
  <div className="dashboard">
    <ActionBar />
    <Map />
  </div>
);

export default Dashboard;
