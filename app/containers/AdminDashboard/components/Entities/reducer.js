import { ENTITIES } from './actions/types';

export const initialState = [];

const entitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ENTITIES.RECEIVE_SUCCESS:
      return [...state, ...payload.entities];

    case ENTITIES.RECEIVE_ERROR:
      return initialState;

    default:
      return state;
  }
};

export default entitiesReducer;
