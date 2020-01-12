import { REGISTRATION } from './action-types';

export const submitRegistration = data => ({
  type: REGISTRATION.SUBMIT,
  payload: {
    data,
  },
});

export const registrationSuccess = response => ({
  type: REGISTRATION.SUCCESS,
  payload: {
    response,
  },
});

export const registrationError = () => ({
  type: REGISTRATION.ERROR,
});
