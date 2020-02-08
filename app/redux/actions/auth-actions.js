import { AUTHENTICATION } from './action-types';

const { LOGIN, LOGOUT, SET_USER_ROLE } = AUTHENTICATION;

export const login = user => ({
  type: LOGIN,
  payload: {
    user,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUserRole = role => ({
  type: SET_USER_ROLE,
  payload: {
    role,
  },
});
