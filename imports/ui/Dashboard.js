import React from 'react';

// the core component of the app
import Map from './Map';
import ActionBar from './ActionBar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: {},
    };
    this.delegate = this.delegate.bind(this);
    this.addedNewOpp = this.addedNewOpp.bind(this);
  }

  addedNewOpp() {
    // delegate();
  }

  delegate(map) {
    google.maps.event.trigger(map, 'resize');
  }

  render() {
    return (
      <div className="dashboard">
        <ActionBar
          addedNewOpp={this.addedNewOpp}
        />
        <Map
          delegate={this.delegate}
        />
      </div>
    );
  }
}

export default Dashboard;
