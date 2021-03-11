import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { login } from './actions/auth';
import './assets/style/style.scss';

const store = configureStore();
const uid = !!localStorage.getItem('user') ? localStorage.getItem('user') : sessionStorage.getItem('user');
const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

const launchApp = async () => {
  if (!!uid) {
    await store.dispatch(login(uid));
    renderApp();
  }
  else {
    renderApp();
  };
};

launchApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
