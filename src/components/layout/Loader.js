import React from 'react';
import loader from '../../images/spinner.svg';

const Loading = () => (
  <div className="loader">
    <img src={loader} alt="Loading..." />
  </div>
);

export default Loading;
