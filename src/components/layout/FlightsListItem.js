import React from 'react';
import moment from 'moment';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

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
    <div className="listitem p-3 mb-2">
      <div className="row">
        <div className="col-sm-1">
          Airline: <br />
          <span className="font-weight-bold">{airlineID}</span>
        </div>
        <div className="col-sm-8 listitem__body">
          <div className="text-right">
            <div className="listitem__time font-weight-bold">
              {timeDeparture[1]}
            </div>
            <small>{moment(timeDeparture[0]).format('MMMM Do')}</small>
            <div className="listitem__code font-weight-bold">
              {departure.airportCode}
            </div>
          </div>
          <div className="listitem__duration text-center font-weight-bold">
            {timeDuration && timeDuration}
            <div className="listitem__duration__decor">
              <div className="listitem__duration__line" />
              <div className="plane" />
            </div>
          </div>
          <div className="text-left">
            <div className="listitem__time font-weight-bold">
              {timeArrival[1]}
            </div>
            <small>{moment(timeArrival[0]).format('MMMM Do')}</small>
            <div className="listitem__code font-weight-bold">
              {arrival.airportCode}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <Button color="info" onClick={() => { alert('Sorry, this feature does not work yet!'); }}>Add to favorites</Button>
        </div>
      </div>
    </div>
  );
};

FlightsListItem.propTypes = {
  flight: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FlightsListItem;
