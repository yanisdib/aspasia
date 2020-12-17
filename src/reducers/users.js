const usersDefaultState = [];

export default function usersReducer(state = usersDefaultState, action) {
    switch (action.type) {
        case 'CREATE_USER_WITH_EMAIL_AND_PASSWORD':
            return [
                ...state,
                action.user
            ];
        case 'CREATE_USER_PROFILE':
            return [
                ...state,
                action.profile
            ];
        default:
            return state;
    };
};