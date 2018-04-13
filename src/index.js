import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import { startSettingAccessToken } from './actions/token';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

store.dispatch(startSettingAccessToken()).then(() => {
  renderApp();
});
