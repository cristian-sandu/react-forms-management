import { FETCH_ENTITY_BY_NAME } from './types';

export const fetchEntityByName = value => ({
  type: FETCH_ENTITY_BY_NAME.FETCH,
  payload: {
    value,
  },
  meta: {
    debounce: {
      time: 500,
    },
  },
});

export const fetchEntityByNameSuccess = response => ({
  type: FETCH_ENTITY_BY_NAME.SUCCESS,
  payload: {
    response,
  },
});

export const fetchEntityByNameError = () => ({
  type: FETCH_ENTITY_BY_NAME.ERROR,
});
