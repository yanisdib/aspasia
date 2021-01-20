import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import App from "../App";
import Header from "../components/Header/Header";
import CreateAccount from "../components/Pages/CreateAccount/CreateAccount";
import CreateUserProfile from "../components/Pages/CreateUserProfile/CreateUserProfile";

export const history = createHistory();

function AppRouter() {
    return (
        <BrowserRouter history={history}>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/sign-up" component={CreateAccount} />
                    <Route path="/create-profile" component={CreateUserProfile} />
                </Switch>
            </main>
        </BrowserRouter>
    );
};

export default AppRouter;