export const fromDepartureFilter = fromFlightsDepartureRange => ({
  type: 'SET_FROM_DEPARTURE_FILTER',
  fromFlightsDepartureRange,
});

export const fromArrivalFilter = fromFlightsArrivalRange => ({
  type: 'SET_FROM_ARRIVAL_FILTER',
  fromFlightsArrivalRange,
});

export const toDepartureFilter = toFlightsDepartureRange => ({
  type: 'SET_TO_DEPARTURE_FILTER',
  toFlightsDepartureRange,
});

export const toArrivalFilter = toFlightsArrivalRange => ({
  type: 'SET_TO_ARRIVAL_FILTER',
  toFlightsArrivalRange,
});
