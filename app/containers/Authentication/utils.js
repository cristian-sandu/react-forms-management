import { INVALID_USERNAME_OR_PASSWORD } from '../Login/Login';

const validUsername = 'admin';
const validPassword = 'admin';

export const areLoginDetailsValid = ({ username, password }) =>
  username === validUsername && password === validPassword;

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
