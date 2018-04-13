import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import PropTypes from 'prop-types';
import { durationFilter, departureFilter, arrivalFilter } from '../../actions/filters';

class Sidebar extends Component {
  state = {
    arrival: [0, 23],
    departure: [0, 23],
    duration: 7,
  };

  handleOnChangeArrival = (arrival) => {
    this.setState({ arrival });
  }

  handleOnChangeDeparture = (departure) => {
    this.setState({ departure });
  }

  handelOnChangeDuration = (duration) => {
    this.setState({ duration });
  }

  dispatchNewArrival = () => {

  }

  dispatchNewDeparture= () => {
    
  }

  dispatchNewDuration = () => {
    this.props.setDuration(this.state.duration);
  }

  render() {
    return (
      <div>
        <div>
          <h5>Travel time</h5>
          {1}h - {this.state.duration}h
          <Slider
            className="my-3"
            min={1}
            max={7}
            defaultValue={7}
            tipTransitionName="rc-slider-tooltip-zoom-down"
            onChange={this.handelOnChangeDuration}
            onAfterChange={this.dispatchNewDuration}
          />
          <h5>Departure from {'Budapest'}</h5>
          {this.state.departure[0]}:00 - 
          {this.state.departure[1]}:{this.state.departure[1] === 23 ? '59' : '00'}
          <Range
            className="my-3"
            allowCross={false}
            min={0}
            max={23}
            defaultValue={[0, 23]}
            onChange={this.handleOnChangeDeparture}
            onAfterChange={this.dispatchNewDeparture}
          />
          <h5>Arrival in {'Frankfurt'}</h5>
          {this.state.arrival[0]}:00 - 
          {this.state.arrival[1]}:{this.state.arrival[1] === 23 ? '59' : '00'}
          <Range
            className="my-3"
            allowCross={false}
            min={0}
            max={23}
            defaultValue={[0, 23]}
            onChange={this.handleOnChangeArrival}
            onAfterChange={this.dispatchNewArrival}
          />
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  setDuration: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setDuration: duration => dispatch(durationFilter(duration)),
});

export default connect(null, mapDispatchToProps)(Sidebar);
