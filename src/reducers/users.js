const usersDefaultState = [];

export default function usersReducer(state = usersDefaultState, action) {
    switch (action) {
        case 'CREATE_USER_WITH_EMAIL_AND_PASSWORD':
            return [
                ...state,
                action.user
            ];
        default:
            return state;
    };
};