import axios from 'axios';

/**
 * Returns an action dispatched to the Redux store
 * Passed the cities data provided by the API
 * @param {object} cities 
 */
export const getCities = (cities) => {
    return ({
        type: 'GET_CITIES',
        cities
    });
};

/**
 * Get Cities data from <Referential> RapidAPI
 * Return an asynchronous function that returns a promise
 * which dispatches the action GET_CITIES
 */
export const startGetCities = (iso) => {
    // Returns a promise
    return async (dispatch) => {
        try {
            const req = axios({
                method: 'GET',
                url: 'https://referential.p.rapidapi.com/v1/city',
                params: {
                    fields: 'iso_a2,state_code,state_hasc,key',
                    iso_a2: iso.substring(0, 2),
                    // UPDATE: limit can't go higher than 250 results now
                    // so I either have to switch to another API or edit the function
                    // to get results based on a string given by user
                    limit: '9999', 
                    sort: 'name'
                },
                headers: {
                    'x-rapidapi-key': '4a607fc436msh22598ccd16b8a18p1c2676jsnb93cf32d5e04',
                    'x-rapidapi-host': 'referential.p.rapidapi.com'
                }
            });
            console.log(req);
            const data = (await req).data;
            return dispatch(getCities(data));
        }
        catch (error) {
            console.log(`${error.code}: ${error.message}`);
            return [];
        };
    };
};