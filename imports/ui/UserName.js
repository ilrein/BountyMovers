import React from 'react';

const UserName = ({ userName }) => <div className="user-name">{userName}</div>;

UserName.propTypes = {
  userName: React.PropTypes.string.isRequired,
};

export default UserName;
