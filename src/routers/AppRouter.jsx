import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import App from '../App';
import PrivateRoute from './PrivateRoute';
import Header from '../components/Header/Header';
import CreateAccount from '../components/Pages/CreateAccount/CreateAccount';
import CreateUserProfile from '../components/Pages/CreateUserProfile/CreateUserProfile';
import Login from '../components/Pages/Login/Login';
import Profile from '../components/Pages/Profile/Profile';

export const history = createHistory();

function AppRouter() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/sign-up" component={CreateAccount} />
          <PrivateRoute path="/create-profile" component={CreateUserProfile} />
          <Route path="/p/:id" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default AppRouter;
