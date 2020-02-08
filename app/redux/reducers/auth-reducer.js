import { EMPTY_STRING } from 'common/constants';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AUTHENTICATION } from '../actions/action-types';

const { LOGIN, LOGOUT, SET_USER_ROLE } = AUTHENTICATION;

const persistConfig = {
  key: 'auth-reducer',
  storage,
};

export const initialState = {
  loggedIn: false,
  user: {
    association: 'Association Default',
    role: EMPTY_STRING,
  },
};

const handleUserLogin = (state, { user }) => ({
  ...state,
  loggedIn: true,
  user,
});

const setUserRole = (state, { role }) => ({
  ...state,
  user: {
    ...state.user,
    role,
  },
});

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return handleUserLogin(state, payload);

    case SET_USER_ROLE:
      return setUserRole(state, payload);

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default persistReducer(persistConfig, authReducer);
