const countriesDefaultState = [];

export default function countriesReducer(state = countriesDefaultState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES': {
            return action.countries;
        }
        default: return state;
    };
};