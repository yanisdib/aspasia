import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';
import countriesReducer from '../reducers/countries';
import citiesReducer from '../reducers/cities';


// Keep REDUX DEVTOOLS functionalities if it exists
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        combineReducers({
            users: usersReducer,
            countries: countriesReducer,
            cities: citiesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};