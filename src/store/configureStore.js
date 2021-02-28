import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';
import countriesReducer from '../reducers/countries';
import citiesReducer from '../reducers/cities';


// Keep REDUX DEVTOOLS functionalities if it exists
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            user: userReducer,
            countries: countriesReducer,
            cities: citiesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};