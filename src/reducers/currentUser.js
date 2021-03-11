const currentUserDefaultState = {};

export default function usersReducer(state = currentUserDefaultState, action) {
  switch (action.type) {
    case 'CREATE_USER_WITH_EMAIL_AND_PASSWORD':
      const data = action.user;
      return data;
    case 'CREATE_USER_PROFILE':
      const profile = action.profile;
      return { ...state, profile };
    case 'GET_CURRENT_USER':
      const currentUser = action.currentUser;
      return currentUser;
    default:
      return state;
  };
};
