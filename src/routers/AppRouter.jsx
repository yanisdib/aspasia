import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import Header from "../components/Header/Header";
import App from "../App";

export const history = createHistory();

function AppRouter() {
    return (
        <Router history={history}>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                </Switch>
            </main>
        </Router>
    );
};

export default AppRouter;