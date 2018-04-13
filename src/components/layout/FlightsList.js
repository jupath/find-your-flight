import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlightsListItem from './FlightsListItem';
import FlightsListItemWithStops from './FlightsListItemWithStops';

const FlightsList = (props) => {
  const {
    isLoading,
    error,
    fromFlights,
    toFlights,
    fromAirportName,
    toAirportName,
  } = props.flights;

  let message;
  if (isLoading) {
    message = 'Loading...';
  } else if (error) {
    message = 'Sorry, there are no flights that match your search';
  }

  const directFromFlights = [];
  const directToFlights = [];
  const fromFlightsWithStops = [];
  const toFlightsWithStops = [];

  fromFlights.forEach((flight) => {
    if ('flights' in flight) {
      fromFlightsWithStops.push(flight);
    } else {
      directFromFlights.push(flight);
    }
  });

  toFlights.forEach((flight) => {
    if ('flights' in flight) {
      toFlightsWithStops.push(flight);
    } else {
      directToFlights.push(flight);
    }
  });

  return (
    <div>
      {message && message}
      {
        Array.isArray(fromFlights) && fromFlights.length > 0 && !message &&
        <div>
          <p>{fromAirportName}  {toAirportName}</p>
          <p>Direct flights</p>
          {directFromFlights.map(fromFlight =>
            (<FlightsListItem
              key={fromFlight.id}
              flight={fromFlight}
            />))
          }
          <p>Flights with stops</p>
          {fromFlightsWithStops.map(fromFlight =>
            (<FlightsListItemWithStops
              key={fromFlight.id}
              flight={fromFlight}
            />))
          }
        </div>
      }
      {
        Array.isArray(toFlights) && toFlights.length > 0 && !message &&
        <div>
          <p>{toAirportName}  {fromAirportName}</p>
          <p>Direct flights</p>
          {directToFlights.map(toFlight =>
            (<FlightsListItem
              key={toFlight.id}
              flight={toFlight}
            />))
          }
          <p>Flights with stops</p>
          {toFlightsWithStops.map(toFlight =>
            (<FlightsListItemWithStops
              key={toFlight.id}
              flight={toFlight}
            />))
          }
        </div>
      }
    </div>
  );
};

FlightsList.propTypes = {
  flights: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    fromFlights: PropTypes.array,
    toFlights: PropTypes.array,
    fromAirport: PropTypes.string,
    toAirport: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  flights: state.flights,
});

export default connect(mapStateToProps)(FlightsList);
