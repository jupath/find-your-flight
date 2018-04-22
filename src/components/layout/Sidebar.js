import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import PropTypes from 'prop-types';
import {
  fromDepartureFilter,
  fromArrivalFilter,
  toDepartureFilter,
  toArrivalFilter,
} from '../../actions/filters';

class Sidebar extends Component {
  state = {
    fromArrivalRange: [0, 23],
    fromDepartureRange: [0, 23],
    toArrivalRange: [0, 23],
    toDepartureRange: [0, 23],
  };

  handleOnChangeFromArrival = (fromArrivalRange) => {
    this.setState({ fromArrivalRange });
  }

  handleOnChangeFromDeparture = (fromDepartureRange) => {
    this.setState({ fromDepartureRange });
  }

  dispatchNewFromArrival = () => {
    this.props.setFromArrivalFilter(this.state.fromArrivalRange);
  }

  dispatchNewFromDeparture= () => {
    this.props.setFromDepartureFilter(this.state.fromDepartureRange);
  }

  handleOnChangeToArrival = (toArrivalRange) => {
    this.setState({ toArrivalRange });
  }

  handleOnChangeToDeparture = (toDepartureRange) => {
    this.setState({ toDepartureRange });
  }

  dispatchNewToArrival = () => {
    this.props.setToArrivalFilter(this.state.toArrivalRange);
  }

  dispatchNewToDeparture= () => {
    this.props.setToDepartureFilter(this.state.toDepartureRange);
  }

  render() {
    const { toAirportName, fromAirportName } = this.props;

    const toAirportCity = toAirportName.substr(0, toAirportName.indexOf(','));
    const fromAirportCity = fromAirportName.substr(0, fromAirportName.indexOf(','));
    return (
      <div className="sidebar">
        <div className="mb-5">
          <h5>From {fromAirportCity} to {toAirportCity}</h5>
          <h6>Departure from {fromAirportCity}</h6>
          {this.state.fromDepartureRange[0]}:00{' '}-{' '}
          {this.state.fromDepartureRange[1]}:{this.state.fromDepartureRange[1] === 23 ? '59' : '00'}
          <Range
            className="my-3 sidebar_slider"
            allowCross={false}
            min={0}
            max={23}
            defaultValue={[0, 23]}
            onChange={this.handleOnChangeFromDeparture}
            onAfterChange={this.dispatchNewFromDeparture}
          />
          <h6>Arrival in {toAirportCity}</h6>
          {this.state.fromArrivalRange[0]}:00{' '}-{' '}
          {this.state.fromArrivalRange[1]}:{this.state.fromArrivalRange[1] === 23 ? '59' : '00'}
          <Range
            className="my-3"
            allowCross={false}
            min={0}
            max={23}
            defaultValue={[0, 23]}
            onChange={this.handleOnChangeFromArrival}
            onAfterChange={this.dispatchNewFromArrival}
          />
        </div>
        <div>
          <h5>From {toAirportCity} to {fromAirportCity}</h5>
          <h6>Departure from {toAirportCity}</h6>
          {this.state.toDepartureRange[0]}:00{' '}-{' '}
          {this.state.toDepartureRange[1]}:{this.state.toDepartureRange[1] === 23 ? '59' : '00'}
          <Range
            className="my-3"
            allowCross={false}
            min={0}
            max={23}
            defaultValue={[0, 23]}
            onChange={this.handleOnChangeToDeparture}
            onAfterChange={this.dispatchNewToDeparture}
          />
          <h6>Arrival in {toAirportCity}</h6>
          {this.state.toArrivalRange[0]}:00{' '}-{' '}
          {this.state.toArrivalRange[1]}:{this.state.toArrivalRange[1] === 23 ? '59' : '00'}
          <Range
            className="my-3"
            allowCross={false}
            min={0}
            max={23}
            defaultValue={[0, 23]}
            onChange={this.handleOnChangeToArrival}
            onAfterChange={this.dispatchNewToArrival}
          />
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  toAirportName: PropTypes.string,
  fromAirportName: PropTypes.string,
  setFromDepartureFilter: PropTypes.func.isRequired,
  setFromArrivalFilter: PropTypes.func.isRequired,
  setToDepartureFilter: PropTypes.func.isRequired,
  setToArrivalFilter: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  toAirportName: '',
  fromAirportName: '',
};

const mapDispatchToProps = dispatch => ({
  setFromDepartureFilter: departureRange => dispatch(fromDepartureFilter(departureRange)),
  setFromArrivalFilter: arrivalRange => dispatch(fromArrivalFilter(arrivalRange)),
  setToDepartureFilter: departureRange => dispatch(toDepartureFilter(departureRange)),
  setToArrivalFilter: arrivalRange => dispatch(toArrivalFilter(arrivalRange)),
});

export default connect(null, mapDispatchToProps)(Sidebar);
