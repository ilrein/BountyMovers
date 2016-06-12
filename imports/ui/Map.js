import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import React, { Component } from 'react';

import LoadingSpinner from './LoadingSpinner';
import OpportunitiesContainer from '../containers/OpportunitiesContainer';

// This is the core of the application
// Might be a big file =)

export default class Map extends Component {
  constructor(props) {
    super(props);
    // console.log();

    this.state = {
      isLoaded: false,
      coords: {},
    };
  }

  componentDidMount() {
    // get geolocation
    // http://www.w3schools.com/html/html5_geolocation.asp

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          isLoaded: true,
          coords: position.coords,
        });

        // we can load the map now
        // 'unused' vars get loaded into the canvas
        // so we actually need them, disregard linter
        /* eslint-disable no-unused-vars */

        const map = new google.maps.Map(this.refs.map, {
          center: {
            lat: this.state.coords.latitude,
            lng: this.state.coords.longitude,
          },
          zoom: 14,
        });

        // add the user on the map
        const userMaker = new google.maps.Marker({
          position: {
            lat: this.state.coords.latitude,
            lng: this.state.coords.longitude,
          },
          map,
          animation: google.maps.Animation.DROP,
          icon: 'user-marker.svg',
        });

        const opps = Opportunities.find({});
        opps.forEach((opp, index) => {
          console.log(opp, index);
        });
      });
    } else {
      console.log('geolocation is not supported');
    }
  }

  render() {
    return (
      <OpportunitiesContainer>
        <div id="map-container">
          {this.state.isLoaded ?
            <div
              id="map"
              ref="map"
            >
            </div> :
            <LoadingSpinner />
          }
        </div>
      </OpportunitiesContainer>
    );
  }
}
