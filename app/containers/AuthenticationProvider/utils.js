import { INVALID_USERNAME_OR_PASSWORD } from '../Login/Login';

const validUsername = 'admin';
const validPassword = 'admin';

export const areLoginDetailsValid = ({ username, password }) =>
  username === validUsername && password === validPassword;

export const invalidFormDetails = ({ username, password }) => ({
  username: {
    value: username,
    errors: [Error(INVALID_USERNAME_OR_PASSWORD)],
  },
  password: {
    value: password,
    errors: [],
  },
});
