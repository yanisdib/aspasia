import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import currentUserReducer from '../reducers/currentUser';
import profileReducer from '../reducers/profile';
import countriesReducer from '../reducers/countries';
import citiesReducer from '../reducers/cities';


// Keep REDUX DEVTOOLS functionalities if it exists
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            currentUser: currentUserReducer,
            profile: profileReducer,
            countries: countriesReducer,
            cities: citiesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};