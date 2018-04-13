const filteredFromFlights = (fromFlights, { arrival, departure, duration }) => {
  fromFlights.filter((flight) => {
    const flightDurationInHour = parseInt(flight.duration.substring(flight.duration.indexOf('H')), 10);
    return flightDurationInHour < duration;
  });
};

const filteredToFlights = (toFlights, { arrival, departure, duration }) => {
  toFlights.filter((flight) => {
    const flightDurationInHour = parseInt(flight.duration.substring(flight.duration.indexOf('H')), 10);
    return flightDurationInHour < duration;
  });
};
