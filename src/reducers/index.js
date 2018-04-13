import { combineReducers } from 'redux';
import auth from './auth';
import favorites from './favorites';
import filters from './filters';
import flights from './flights';
import token from './token';

export default combineReducers({
  auth,
  favorites,
  filters,
  flights,
  token,
});
