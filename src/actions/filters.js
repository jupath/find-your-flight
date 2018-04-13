export const initialDuartion = durations => ({
  type: 'SET_INITIAL_DURATIONS',
  durations,
});

export const durationFilter = duration => ({
  type: 'SET_DURATION',
  duration,
});

export const departureFilter = departure => ({
  type: 'SET_DEPARTURE',
  departure,
});

export const arrivalFilter = arrival => ({
  type: 'SET_ARRIVAL',
  arrival,
});
