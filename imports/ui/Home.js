import React from 'react';

// Our equavilent to a landing page
import LandingPage from './LandingPage';
import Login from './Login';

const Home = () => (
  <div className="home">
    <LandingPage />
    <Login />
  </div>
);

export default Home;
