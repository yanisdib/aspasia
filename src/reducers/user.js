const usersDefaultState = [];

export default function usersReducer(state = usersDefaultState, action) {
  switch (action.type) {
    case 'CREATE_USER_WITH_EMAIL_AND_PASSWORD':
      const data = action.user;
      return data;
    case 'CREATE_USER_PROFILE':
      const profile = action.profile;
      return { ...state, profile };
    default:
      return state;
  }
}
