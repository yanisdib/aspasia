const countriesDefaultState = [];

export function countriesReducer(state = countriesDefaultState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES': {
            return { ...state, countries: action.countries };
        }
        case 'GET_CITIES': {
            return { ...state, cities: action.cities };
        }
        default: return state;
    };
};