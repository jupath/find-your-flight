const initialReducerState = {
  isLoading: false,
  error: false,
  fromFlights: [],
  toFlights: [],
  fromAirportName: '',
  toAirportName: '',
};

export default (state = initialReducerState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return ({
        ...state,
        isLoading: action.isLoading,
      });
    case 'GET_FLIGHTS':
      return ({
        ...state,
        fromFlights: action.fromFlights,
        toFlights: action.toFlights,
        fromAirportName: action.fromAirportName,
        toAirportName: action.toAirportName,
      });
    case 'SET_ERROR':
      return ({
        ...state,
        error: action.error,
      });
    default:
      return state;
  }
};
