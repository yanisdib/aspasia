const citiesDefaultState = [];

export default function citiesReducer(state = citiesDefaultState, action) {
    switch (action.type) {
        case 'GET_CITIES': {
            return action.cities;
        }
        default: return state;
    };
};