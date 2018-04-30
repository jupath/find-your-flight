import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../constants/routes';
import { startUserLogout } from '../../actions/auth';

class HeaderLoggedIn extends Component {
  state = {
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <Nav>
          <NavItem className="nav__greeting">
            Hello, {this.props.userName}!
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              MENU
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem><Link to={routes.HOME}>Home</Link></DropdownItem>
              <DropdownItem><Link to={routes.MY_FAVORITES}>My favorites</Link></DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="nav__logout" onClick={this.props.logOutUser}>Log out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}

HeaderLoggedIn.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(startUserLogout()),
});

export default connect(null, mapDispatchToProps)(HeaderLoggedIn);
