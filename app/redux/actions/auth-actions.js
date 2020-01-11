import { AUTHENTICATION } from './action-types';

const { LOGIN, LOGOUT } = AUTHENTICATION;

export const login = user => ({
  type: LOGIN,
  payload: {
    user,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
