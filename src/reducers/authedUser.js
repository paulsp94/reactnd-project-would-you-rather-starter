import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from '../actions/authedUser';

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      return action.id;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
};
