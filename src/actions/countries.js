import axios from 'axios';

/**
 * Returns an action dispatched to a Redux store
 * Passed the countries data received by the API
 * @param {object} countries 
 */
export function getCountries(countries) {
    return ({
        type: 'GET_COUNTRIES',
        countries
    });
};

/**
 * Get Countries data from <Referential> RapidAPI
 * Return an asynchronous function that returns a promise
 * which dispatches the action GET_COUNTRIES
 */
export const startGetCountries = () => {
    return async (dispatch) => {
        const req = axios({
            method: 'GET',
            url: 'https://referential.p.rapidapi.com/v1/country',
            params: {
                fields: 'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code'
            },
            headers: {
                'x-rapidapi-key': '4a607fc436msh22598ccd16b8a18p1c2676jsnb93cf32d5e04',
                'x-rapidapi-host': 'referential.p.rapidapi.com'
            }
        });
        console.log(req);
        const countries = (await req).data;
        return dispatch(getCountries(countries));
    }
};