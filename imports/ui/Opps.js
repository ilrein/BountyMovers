import React, { Component, PropTypes } from 'react';

export default class Opps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.opps);
    return (
      <div className="marker">
        {this.props.children}
      </div>
    );
  }
}

Opps.propTypes = {
  children: PropTypes.node,
};
