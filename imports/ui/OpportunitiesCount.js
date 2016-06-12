import React from 'react';

const OpportunitiesCount = ({ totalOpportunities }) => { // eslint-disable-line
  return (
    <div className="total-opportunities">
      {totalOpportunities}
    </div>
  );
};

OpportunitiesCount.propTypes = {
  totalOpportunities: React.PropTypes.number.isRequired,
};

export default OpportunitiesCount;
