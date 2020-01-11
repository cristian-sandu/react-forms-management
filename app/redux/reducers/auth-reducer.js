import { EMPTY_OBJECT } from 'common/constants';

import { AUTHENTICATION } from '../actions/action-types';

const { LOGIN, LOGOUT } = AUTHENTICATION;

export const initialState = {
  loggedIn: false,
  user: EMPTY_OBJECT,
};

const handleUserLogin = (authState, { user }) => ({
  ...authState,
  loggedIn: true,
  user,
});

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return handleUserLogin(state, payload);

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
