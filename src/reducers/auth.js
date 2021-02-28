export default function auth(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return { uid: action.uid };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}
