import React, { PropTypes } from 'react';

const MainLayout = ({ content }) => (
  <main>
    {content}
  </main>
);

MainLayout.propTypes = {
  content: PropTypes.node,
};

export default MainLayout;
