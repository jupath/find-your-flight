import 'react-dates/initialize';
import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import airports from '../../resources/airports.json';
import apiUrl from '../../constants/apiUrl';
import { isLoading, getFlights, setError } from '../../actions/flights';
import { initialDuartion } from '../../actions/filters';

class FlightSearchForm extends Component {
  state = {
    listOfAirports: [],
    fromAirport: '',
    toAirport: '',
    isDirect: true,
    startDate: moment().startOf('day'),
    endDate: moment().startOf('day'),
    focusedInput: null,
  };

  componentDidMount() {
    this.fetchAirports();
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate,
    });
  }

  onChangeDirect = () => {
    this.setState({ isDirect: !this.state.isDirect });
  }

  fetchAirports = () => {
    const listOfAirports = airports.map(airport => ({
      value: airport.code,
      label: `${airport.city}, ${airport.name} (${airport.code})`,
    }));
    this.setState({ listOfAirports });
  }

  createFlightsArray = flightsArr => flightsArr.map((cur) => {
    const id = Math.floor(Math.random() * 100000);
    if (Array.isArray(cur.Flight)) {
      const flights = cur.Flight.map(current => ({
        departure: {
          airportCode: current.Departure.AirportCode,
          dateTime: current.Departure.ScheduledTimeLocal.DateTime,
        },
        arrival: {
          airportCode: current.Arrival.AirportCode,
          dateTime: current.Arrival.ScheduledTimeLocal.DateTime,
        },
        airlineID: current.MarketingCarrier.AirlineID,
        flightNumber: current.MarketingCarrier.FlightNumber,
      }));
      const arr = {
        id,
        duration: cur.TotalJourney.Duration,
        flights,
      };
      return arr;
    }
    return ({
      id,
      duration: cur.TotalJourney.Duration,
      departure: {
        airportCode: cur.Flight.Departure.AirportCode,
        dateTime: cur.Flight.Departure.ScheduledTimeLocal.DateTime,
      },
      arrival: {
        airportCode: cur.Flight.Arrival.AirportCode,
        dateTime: cur.Flight.Arrival.ScheduledTimeLocal.DateTime,
      },
      airlineID: cur.Flight.MarketingCarrier.AirlineID,
      flightNumber: cur.Flight.MarketingCarrier.FlightNumber,
    });
  })

  submitSearchForm = async (event) => {
    event.preventDefault();

    this.props.isLoading(true);

    const {
      fromAirport,
      toAirport,
      startDate,
      endDate,
      isDirect,
    } = this.state;

    const startDateFormatted = startDate.format('YYYY-MM-DD');
    const endDateFormatted = endDate.format('YYYY-MM-DD');

    try {
      const options = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.props.accessToken}`,
        },
      };

      const resOrigin = await fetch(`${apiUrl}/operations/schedules/${fromAirport.value}/${toAirport.value}/${startDateFormatted}?directFlights=${isDirect}`, options);
      const resDestination = await fetch(`${apiUrl}/operations/schedules/${toAirport.value}/${fromAirport.value}/${endDateFormatted}?directFlights=${isDirect}`, options);

      const jsonOrigin = await resOrigin.json();
      const jsonDestination = await resDestination.json();

      const fromFlights = await this.createFlightsArray(jsonOrigin.ScheduleResource.Schedule);
      const toFlights = await this.createFlightsArray(jsonDestination.ScheduleResource.Schedule);

      // Calculate max and min durations for filters
      const fromFlightsDurations = await fromFlights.map(flight =>
        parseInt(flight.duration.substring(2, flight.duration.indexOf('H')), 10));
      const fromFlightsDurationsMax = Math.max(...fromFlightsDurations);
      const fromFlightsDurationsMin = Math.min(...fromFlightsDurations);

      const toFlightsDurations = await toFlights.map(flight =>
        parseInt(flight.duration.substring(2, flight.duration.indexOf('H')), 10));
      const toFlightsDurationsMax = Math.max(...toFlightsDurations);
      const toFlightsDurationsMin = Math.min(...toFlightsDurations);

      this.props.setInitialDurationsFilter({

      });

      // Set loading and error false
      this.props.isLoading(false);
      this.props.setError(false);

      // Set airpot names
      const fromAirportName = fromAirport.label;
      const toAirportName = toAirport.label;

      // Create flights object
      const flightsObj = {
        fromFlights,
        toFlights,
        fromAirportName,
        toAirportName,
      };

      this.props.getFlights(flightsObj);
    } catch (err) {
      this.props.isLoading(false);
      this.props.setError(true);
    }
  }

  handleFromAirportChange = (fromAirport) => {
    this.setState({ fromAirport });
  }

  handleToAirportChange = (toAirport) => {
    this.setState({ toAirport });
  }

  render() {
    return (
      <div>
        <div>
          <Label check>
            <Input type="checkbox" checked={this.state.isDirect} onChange={this.onChangeDirect} />{' '}
            Direct flights only?
          </Label>
        </div>
        <Form inline onSubmit={this.submitSearchForm}>
          <Select
            name="fromAirport"
            value={this.state.fromAirport}
            required
            onChange={this.handleFromAirportChange}
            options={this.state.listOfAirports}
          />
          <Select
            name="toAirport"
            value={this.state.toAirport}
            required
            onChange={this.handleToAirportChange}
            options={this.state.listOfAirports}
          />
          <FormGroup>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="start-date"
              endDate={this.state.endDate}
              endDateId="end-date"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              numberOfMonths={1}
              showClearDates
            />
          </FormGroup>
          <Button>Search</Button>
        </Form>
      </div>
    );
  }
}

FlightSearchForm.propTypes = {
  accessToken: PropTypes.string.isRequired,
  getFlights: PropTypes.func.isRequired,
  isLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setInitialDurationsFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  accessToken: state.token.accessToken,
});

const mapDispatchToProps = dispatch => ({
  getFlights: flightsObj => dispatch(getFlights(flightsObj)),
  isLoading: bool => dispatch(isLoading(bool)),
  setError: bool => dispatch(setError(bool)),
  setInitialDurationsFilter: durations => dispatch(initialDuartion(durations)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchForm);
