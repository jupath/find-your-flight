import React, { Component } from 'react';
import SearchSection from '../layout/SearchSection';
import FlightsList from '../layout/FlightsList';
import Sidebar from '../layout/Sidebar';

class Home extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <SearchSection />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Sidebar />
            </div>
            <div className="col-sm-9">
              <FlightsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
