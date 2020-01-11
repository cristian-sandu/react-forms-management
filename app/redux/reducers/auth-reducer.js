import { AUTHENTICATION } from '../actions/action-types';

const { LOGIN, LOGOUT } = AUTHENTICATION;

export const initialState = {
  loggedIn: false,
  user: {
    isAdministrator: true,
    association: 'Association Default',
  },
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
