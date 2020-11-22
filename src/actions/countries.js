import axios from 'axios';

const proxy = "https://cors-anywhere.herokuapp.com/";

/**
 * Generates an auth token using an API token and the associated email
 */
async function authToken() {
    const req = axios.get(`${proxy}https://www.universal-tutorial.com/api/getaccesstoken`);
    const res = await req.headers({
        "Accept": "application/json",
        "api-token": "719b9dDlAJrLps9y22z1kQDbJ0PwIDjs49LesxCnyrZ90AYznV_xTBZJTrLsHcXSFNk",
        "user-email": "dev.yanisdib@gmail.com"
    });
    return res.body.auth_token; // generated authentication token
};

export function getCountries(countries) {
    return ({
        type: 'GET_COUNTRIES',
        countries
    });
};

export const startGetCountries = () => {
    return async (dispatch) => {
        const token = await authToken();
        const req = axios.get(`${proxy}https://www.universal-tutorial.com/api/countries`);
        const res = await req.headers({
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        });
        const countries = res.body;
        return dispatch(getCountries(countries));
    }
};

export const getCities = (cities) => {
    return ({
        type: 'GET_CITIES',
        cities
    });
}

export const startGetCities = (country) => {
    return async (dispatch) => {
        let data = {};
        try {
            if (country === 'United States') {
                const req = axios.get(`${proxy}https://www.universal-tutorial.com/api/states/${country}`);
                data = await req.headers({
                    "Authorization": `Bearer ${authToken()}`,
                    "Accept": "application/json"
                });
                // const states = res.body;
                // return states;
            }
            else {
                const req = axios.get(`${proxy}https://www.universal-tutorial.com/api/cities/${country}`);
                data = await req.headers({
                    "Authorization": `Bearer ${authToken}`,
                    "Accept": "application/json"
                });
                // const cities = res.body;
                // return cities;
            };
            return dispatch(getCities(data.body));
        }
        catch (error) {
            console.log(`${error.code}: ${error.message}`);
        };
    }
};