import React from 'react';
import moment from 'moment';

const FlightsListItem = (props) => {
  const {
    airlineID,
    duration,
    departure,
    arrival,
  } = props.flight;

  const timeDeparture = departure.dateTime.split('T');
  const timeArrival = arrival.dateTime.split('T');

  let timeDuration;
  if (duration) {
    timeDuration = duration.slice(2).toLowerCase();
  }

  return (
    <div className="listitem">
      <div className="row">
        <div className="col-sm-1">
          {airlineID}
        </div>
        <div className="col-sm-8 listitem__body">
          <div className="text-right">
            <div className="listitem__time">
              {timeDeparture[1]}
            </div>
            <small>{moment(timeDeparture[0]).format('MMMM Do')}</small>
            <div className="listitem__code">
              {departure.airportCode}
            </div>
          </div>
          <div className="listitem__duration">
            {timeDuration && timeDuration}
          </div>
          <div className="text-left">
            <div className="listitem__time">
              {timeArrival[1]}
            </div>
            <small>{moment(timeArrival[0]).format('MMMM Do')}</small>
            <div className="listitem__code">
              {arrival.airportCode}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <button>Add to favorites</button>
        </div>
      </div>
    </div>
  );
};

export default FlightsListItem;
