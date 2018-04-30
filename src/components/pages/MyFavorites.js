import React, { Component } from 'react';
import Navigation from '../layout/Navigation';

class MyFavorites extends Component {
  state = {

  };

  render() {
    return (
      <header className="header">
        <Navigation />
        <div className="container">
          <h3 className="text-center py-6">
            <span className="header__title pb-3 pt-2 px-4">My Favorite Flights</span>
          </h3>
        </div>
      </header>
    );
  }
}

export default MyFavorites;
