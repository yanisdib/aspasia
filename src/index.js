import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startGetCountries } from './actions/countries';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { login } from './actions/auth';
import { startGetCurrentUser } from './actions/user';
import './assets/style/style.scss';

const store = configureStore();
const uid = !!localStorage.getItem('user') ? localStorage.getItem('user') : sessionStorage.getItem('user');
let hasRendered = false;
const renderApp = async () => {
  await store.dispatch(startGetCountries());
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    hasRendered = true;
  };
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

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

// store.dispatch(startGetCountries()).then(() => {
//  ReactDOM.render(
//    <React.StrictMode>
//      <Provider store={store}>
//        <AppRouter />
//      </Provider>
//    </React.StrictMode>,
//    document.getElementById('root')
//  );
//});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
