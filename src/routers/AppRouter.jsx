import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import App from "../App";
import Header from "../components/Header/Header";
import CreateUserProfile from "../components/Pages/CreateUserProfile/CreateUserProfile";

export const history = createHistory();

function AppRouter() {
    return (
        <Router history={history}>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/create-profile" component={CreateUserProfile} />
                </Switch>
            </main>
        </Router>
    );
};

export default AppRouter;