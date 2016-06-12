import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
          zoom: 10,
        });

        this.props.delegate(map);

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
          let icon;
          if (opp.notForProfit) icon = 'dove.svg';
          else icon = 'job-marker.svg';
          const oppMarker = new google.maps.Marker({
            position: {
              lat: opp.position.lat,
              lng: opp.position.lng,
            },
            map,
            animation: google.maps.Animation.DROP,
            icon,
          });
          const charityString =
            `<div class="infobox">
              <div class="infobox-title">
                Title: ${opp.title}
              </div>
              <div class="infobox-description">
                Description: ${opp.description}
              </div>
              <div class="infobox-description">
                Date: ${opp.date}
              </div>
              <div class="infobox-description">
                Time: ${opp.time}
              </div>
              <div class="infobox-hours">
                Hours: ${opp.hours}
              </div>
              <div class="infobox-action">
                <button onclick='console.log("Hello")'>Apply</button>
              </div>
              <div class="infobox-warning">
                *CommerceCommunity is in Beta and all applications are disabled.
              </div>
            </div>`;
          const jobString =
            `<div class="infobox">
              <div class="infobox-title">
                Title: ${opp.title}
              </div>
              <div class="infobox-description">
                Description: ${opp.description}
              </div>
              <div class="infobox-description">
                Date: ${opp.date}
              </div>
              <div class="infobox-description">
                Time: ${opp.time}
              </div>
              <div class="infobox-hours">
                Hours: ${opp.hours}
              </div>
              <div class="infobox-rate">
                Rate: $${opp.rate}
              </div>
              <div class="infobox-action">
                <button onclick='' class="infobox-button">Apply</button>
              </div>
              <div class="infobox-warning">
                *CommerceCommunity is in Beta and all applications are disabled.
              </div>
            </div>`;
          const infoWindow = new google.maps.InfoWindow({
            content: opp.notForProfit ? charityString : jobString,
          });
          oppMarker.addListener('click', () => {
            infoWindow.open(map, oppMarker);
          });
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

Map.propTypes = {
  delegate: React.PropTypes.any,
};
