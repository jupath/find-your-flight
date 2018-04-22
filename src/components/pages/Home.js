import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchSection from '../layout/SearchSection';
import FlightsList from '../layout/FlightsList';
import Sidebar from '../layout/Sidebar';

const Home = (props) => {
  const {
    isLoading,
    error,
    fromAirportName,
    toAirportName,
  } = props;

  let message;

  if (isLoading) {
    message = 'Loading...';
  } else if (error) {
    message = 'Sorry, there are no flights that match your search';
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <h3 className="header__logo py-3">Find Your Flight</h3>
          <div className="search-section py-5">
            <div className="search-section__content py-3">
              <h4 className="text-center pb-4">This is a React/Redux project built on <a href="https://developer.lufthansa.com/docs" className="text-info" target="_blank" rel="noopener noreferrer">Lufthansa Open API</a>.<br />
              Sorry, you can not book flight tickets here (yet). :)
              </h4>
              <SearchSection />
            </div>
          </div>
        </div>
      </header>
      {message && <div>{message}</div>}
      {
        !message && toAirportName && fromAirportName &&
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Sidebar
                toAirportName={toAirportName}
                fromAirportName={fromAirportName}
              />
            </div>
            <div className="col-sm-9">
              <FlightsList
                toAirportName={toAirportName}
                fromAirportName={fromAirportName}
              />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  fromAirportName: PropTypes.string.isRequired,
  toAirportName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.flights.isLoading,
  error: state.flights.error,
  toAirportName: state.flights.toAirportName,
  fromAirportName: state.flights.fromAirportName,
});

export default connect(mapStateToProps)(Home);
