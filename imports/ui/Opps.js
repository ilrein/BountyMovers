import React, { Component, PropTypes } from 'react';

export default class Opps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="opps">
        {this.props.children}
      </div>
    );
  }
}

Opps.propTypes = {
  children: PropTypes.node,
};
