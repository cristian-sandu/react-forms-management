import { FETCH_ENTITY_BY_ID } from './types';

export const fetchEntityById = value => ({
  type: FETCH_ENTITY_BY_ID.FETCH,
  payload: {
    value,
  },
  meta: {
    debounce: {
      time: 500,
    },
  },
});

export const fetchEntityByIdSuccess = response => ({
  type: FETCH_ENTITY_BY_ID.SUCCESS,
  payload: {
    response,
  },
});

export const fetchEntityByIdError = () => ({
  type: FETCH_ENTITY_BY_ID.ERROR,
});
