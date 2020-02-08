import { includes } from 'ramda';

import { USER_ROLES } from 'common/constants';
import {
  ADMIN_CREDENTIALS,
  ENTITY_USER_CREDENTIALS,
  ASSOCIATION_USER_CREDENTIALS,
} from 'utils/credentials';

import { INVALID_USERNAME_OR_PASSWORD } from '../Login/Login';

const { ADMIN, ENTITY_USER, ASSOCIATION_USER } = USER_ROLES;

export const invalidFormDetails = ({ username, password }) => ({
  username: {
    value: username,
    errors: [],
  },
  password: {
    value: password,
    errors: [Error(INVALID_USERNAME_OR_PASSWORD)],
  },
});

export const getUserRole = userDetails => {
  switch (true) {
    case includes(userDetails, ADMIN_CREDENTIALS):
      return ADMIN;

    case includes(userDetails, ENTITY_USER_CREDENTIALS):
      return ENTITY_USER;

    case includes(userDetails, ASSOCIATION_USER_CREDENTIALS):
      return ASSOCIATION_USER;

    default:
      return null;
  }
};
