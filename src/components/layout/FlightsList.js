import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlightsListItem from './FlightsListItem';
import FlightsListItemWithStops from './FlightsListItemWithStops';
import { filteredFromFlights, filteredToFlights } from '../../selectors/flights';

const FlightsList = (props) => {
  const directFromFlights = [];
  const directToFlights = [];
  const fromFlightsWithStops = [];
  const toFlightsWithStops = [];

  props.fromFlights.forEach((flight) => {
    if ('flights' in flight) {
      fromFlightsWithStops.push(flight);
    } else {
      directFromFlights.push(flight);
    }
  });

  props.toFlights.forEach((flight) => {
    if ('flights' in flight) {
      toFlightsWithStops.push(flight);
    } else {
      directToFlights.push(flight);
    }
  });

  return (
    <div>
      <div className="list__header">
        <div className="font-weight-bold">{props.fromAirportName}</div>
        <div className="plane" />
        <div className="font-weight-bold">{props.toAirportName}</div>
      </div>
      {
        Array.isArray(props.fromFlights) && props.fromFlights.length > 0 &&
        <div className="my-3">
          {directToFlights.length > 0 && <p className="font-weight-bold">Direct flights</p>}
          {directFromFlights.map(fromFlight =>
            (<FlightsListItem
              key={fromFlight.id}
              flight={fromFlight}
            />))
          }
          {fromFlightsWithStops.length > 0 && <p className="font-weight-bold">Flights with stops</p>}
          {fromFlightsWithStops.map(fromFlight =>
            (<FlightsListItemWithStops
              key={fromFlight.id}
              flight={fromFlight}
            />))
          }
        </div>
      }
      {
        props.fromFlights.length === 0
        &&
        <div className="text-center font-weight-bold text-danger py-3">
          Sorry, there are no flights from {props.fromAirportName} to {props.toAirportName} that match your search
        </div>
      }
      <div className="list__header">
        <div className="font-weight-bold">{props.toAirportName}</div>
        <div className="plane" />
        <div className="font-weight-bold">{props.fromAirportName}</div>
      </div>
      {
        Array.isArray(props.toFlights) && props.toFlights.length > 0 &&
        <div className="mt-3">
          {directToFlights.length > 0 && <p className="font-weight-bold">Direct flights</p>}
          {directToFlights.map(toFlight =>
            (<FlightsListItem
              key={toFlight.id}
              flight={toFlight}
            />))
          }
          {toFlightsWithStops.length > 0 && <p className="font-weight-bold">Flights with stops</p>}
          {toFlightsWithStops.map(toFlight =>
            (<FlightsListItemWithStops
              key={toFlight.id}
              flight={toFlight}
            />))
          }
        </div>
      }
      {
        props.toFlights.length === 0
        &&
        <div className="text-center font-weight-bold text-danger py-3">
          Sorry, there are no flights from {props.toAirportName} to {props.fromAirportName} that match your search
        </div>
      }
    </div>
  );
};

FlightsList.propTypes = {
  fromAirportName: PropTypes.string.isRequired,
  toAirportName: PropTypes.string.isRequired,
  fromFlights: PropTypes.arrayOf(PropTypes.object).isRequired,
  toFlights: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  fromFlights: filteredFromFlights(
    state.flights.fromFlights,
    state.filters.fromFlightsArrivalRange, state.filters.fromFlightsDepartureRange,
  ),
  toFlights: filteredToFlights(
    state.flights.toFlights,
    state.filters.toFlightsArrivalRange, state.filters.toFlightsDepartureRange,
  ),
});

export default connect(mapStateToProps)(FlightsList);
