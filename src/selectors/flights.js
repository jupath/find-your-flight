const filteredFromFlights = (fromFlights, arrivalRange, departureRange) => {
  if (fromFlights.length === 0) return [];

  return fromFlights.filter((flight) => {
    const flightArrivalTime = 'flights' in flight ? flight.flights[1].arrival.dateTime : flight.arrival.dateTime;
    const flightDepartureTime = 'flights' in flight ? flight.flights[0].departure.dateTime : flight.departure.dateTime;

    const arrivalHour = parseInt(flightArrivalTime.substring(
      flightArrivalTime.indexOf('T') + 1,
      flightArrivalTime.indexOf(':'),
    ), 10);

    const departureHour = parseInt(flightDepartureTime.substring(
      flightDepartureTime.indexOf('T') + 1,
      flightDepartureTime.indexOf(':'),
    ), 10);

    return arrivalHour >= arrivalRange[0] &&
      arrivalHour <= arrivalRange[1] &&
      departureHour >= departureRange[0] &&
      departureHour <= departureRange[1];
  });
};

const filteredToFlights = (toFlights, arrivalRange, departureRange) => {
  if (toFlights.length === 0) return [];

  return toFlights.filter((flight) => {
    const flightArrivalTime = 'flights' in flight ? flight.flights[1].arrival.dateTime : flight.arrival.dateTime;
    const flightDepartureTime = 'flights' in flight ? flight.flights[0].departure.dateTime : flight.departure.dateTime;

    const arrivalHour = parseInt(flightArrivalTime.substring(
      flightArrivalTime.indexOf('T') + 1,
      flightArrivalTime.indexOf(':'),
    ), 10);

    const departureHour = parseInt(flightDepartureTime.substring(
      flightDepartureTime.indexOf('T') + 1,
      flightDepartureTime.indexOf(':'),
    ), 10);

    return arrivalHour >= arrivalRange[0] &&
      arrivalHour <= arrivalRange[1] &&
      departureHour >= departureRange[0] &&
      departureHour <= departureRange[1];
  });
};

export { filteredFromFlights, filteredToFlights };
