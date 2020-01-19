import { ASSOCIATIONS } from './types';

export const fetchAssociations = () => ({
  type: ASSOCIATIONS.FETCH,
});

export const receiveAssociationsSuccess = associations => ({
  type: ASSOCIATIONS.RECEIVE_SUCCESS,
  payload: {
    associations,
  },
});

export const receiveAssociationsError = () => ({
  type: ASSOCIATIONS.RECEIVE_ERROR,
});
