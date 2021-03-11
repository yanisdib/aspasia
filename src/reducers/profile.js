const profileDefaultState = {};

export default function profileReducer(state = profileDefaultState, action) {
    switch (action.type) {
        case 'GET_USER_PROFILE':
            const data = action.profile;
            return data;
        default: return state;
    };
};