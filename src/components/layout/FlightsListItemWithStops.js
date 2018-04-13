import React from 'react';
import FlightsListItem from './FlightsListItem';

const FlightsListItemWithStop = (props) => {
  const {
    duration,
    flights,
  } = props.flight;

  const timeDuration = duration.slice(2).toLowerCase();

  return (
    <div>
      <p>Total duration: {timeDuration}</p>
      {flights.map(flight => <FlightsListItem key={flight.flightNumber} flight={flight} />)}
    </div>
  );
};

export default FlightsListItemWithStop;
