import React, { Component } from 'react';

import LoadingSpinner from './LoadingSpinner';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    // get geolocation
    // http://www.w3schools.com/html/html5_geolocation.asp

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        this.setState({ isLoaded: true });
      });
    } else {
      console.log('geolocation is not supported');
    }
  }

  render() {
    return (
      <div id="map-container">
        {this.state.isLoaded ? <div id="map"></div> : <LoadingSpinner />}
      </div>
    );
  }
}
