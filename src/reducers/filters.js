const initialState = {
  toFlightsArrivalRange: [0, 23],
  toFlightsDepartureRange: [0, 23],
  fromFlightsArrivalRange: [0, 23],
  fromFlightsDepartureRange: [0, 23],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TO_DEPARTURE_FILTER':
      return ({
        ...state,
        toFlightsDepartureRange: action.toFlightsDepartureRange,
      });
    case 'SET_TO_ARRIVAL_FILTER':
      return ({
        ...state,
        toFlightsArrivalRange: action.toFlightsArrivalRange,
      });
    case 'SET_FROM_DEPARTURE_FILTER':
      return ({
        ...state,
        fromFlightsDepartureRange: action.fromFlightsDepartureRange,
      });
    case 'SET_FROM_ARRIVAL_FILTER':
      return ({
        ...state,
        fromFlightsArrivalRange: action.fromFlightsArrivalRange,
      });
    default:
      return state;
  }
};
