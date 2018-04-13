const initialState = {
  arrival: [],
  departure: [],
  duration: {
    min: 1,
    max: undefined,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INITIAL_DURATION':
      return ({
        ...state,
        duration: action.durations,
      });
    case 'SET_DURATION':
      return ({
        ...state,
        duration: {
          min: state.duration.min,
          max: action.duration,
        },
      });
    case 'SET_DEPARTURE':
      return ({
        ...state,
        departure: action.departure,
      });
    case 'SET_ARRIVAL':
      return ({
        ...state,
        arrival: action.arrival,
      });
    default:
      return state;
  }
};
