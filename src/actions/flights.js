export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool,
});

export const getFlights = ({
  fromFlights,
  toFlights,
  fromAirportName,
  toAirportName,
}) => ({
  type: 'GET_FLIGHTS',
  fromFlights,
  toFlights,
  fromAirportName,
  toAirportName,
});

export const setError = bool => ({
  type: 'SET_ERROR',
  error: bool,
});
