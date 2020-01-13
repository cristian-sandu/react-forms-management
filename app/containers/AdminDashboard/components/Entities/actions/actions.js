import { ENTITIES } from './types';

export const fetchEntities = () => ({
  type: ENTITIES.FETCH,
});

export const receiveEntitiesSuccess = entities => ({
  type: ENTITIES.RECEIVE_SUCCESS,
  payload: {
    entities,
  },
});

export const receiveEntitiesError = () => ({
  type: ENTITIES.RECEIVE_ERROR,
});
