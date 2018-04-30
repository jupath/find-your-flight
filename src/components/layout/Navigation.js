import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { startUserLogin } from '../../actions/auth';
import HeaderLoggedIn from '../layout/HeaderLoggedIn';
import * as routes from '../../constants/routes';

const Navigation = props => (
  <div className="header__nav">
    <div className="container">
      <h3 className="header__logo py-3 font-weight-bold"><Link to={routes.HOME}>Find Your Flight</Link></h3>
      {
        props.userName === null ?
          <Button color="danger" onClick={props.loginUser}>Log in</Button>
          :
          <HeaderLoggedIn userName={props.userName} />
      }
    </div>
  </div>
);

Navigation.propTypes = {
  userName: PropTypes.string,
  loginUser: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  userName: null,
};

const mapStateToProps = state => ({
  userName: state.auth.name,
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(startUserLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
