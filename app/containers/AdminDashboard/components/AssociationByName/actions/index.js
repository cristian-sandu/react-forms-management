import { FETCH_ASSOCIATION_BY_NAME } from './types';

export const fetchAssociationByName = value => ({
  type: FETCH_ASSOCIATION_BY_NAME.FETCH,
  payload: {
    value,
  },
  meta: {
    debounce: {
      time: 500,
    },
  },
});

export const fetchAssociationByNameSuccess = response => ({
  type: FETCH_ASSOCIATION_BY_NAME.SUCCESS,
  payload: {
    response,
  },
});

export const fetchAssociationByNameError = () => ({
  type: FETCH_ASSOCIATION_BY_NAME.ERROR,
});
