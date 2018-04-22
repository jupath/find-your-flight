import React from 'react';
import PropTypes from 'prop-types';
import FlightsListItem from './FlightsListItem';

const FlightsListItemWithStop = (props) => {
  const {
    duration,
    flights,
  } = props.flight;

  const timeDuration = duration.slice(2).toLowerCase();

  return (
    <div className="list__flights-with-stops">
      <p className="font-weight-bold">Total duration: {timeDuration}</p>
      {flights.map(flight => <FlightsListItem key={flight.flightNumber} flight={flight} />)}
    </div>
  );
};

FlightsListItemWithStop.propTypes = {
  flight: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FlightsListItemWithStop;
