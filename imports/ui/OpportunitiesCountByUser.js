import React from 'react';

const TotalContractsByUser = ({ totalOpportunitiesCountByUser }) => { // eslint-disable-line
  return (
    <div>
      <h6>My Total OpportunitiesCount</h6>
      {totalOpportunitiesCountByUser}
    </div>
  );
};

TotalOpportunitiesCountByUser.propTypes = {
  totalOpportunitiesCount: React.PropTypes.number.isRequired,
};

export default TotalOpportunitiesCountByUser;
