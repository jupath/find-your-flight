import React, { Component } from 'react';
import FlightSearchForm from '../forms/FlightsSearchForm';

class SearchSection extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <div className="container">
          <FlightSearchForm />
        </div>
      </div>
    );
  }
}

export default SearchSection;
