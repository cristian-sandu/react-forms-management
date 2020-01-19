import { FETCH_ENTITY_BY_NAME } from '../actions/types';

export const initialState = {};

const entityByNameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ENTITY_BY_NAME.SUCCESS:
      return payload.response;

    case FETCH_ENTITY_BY_NAME.ERROR:
      return initialState;

    default:
      return state;
  }
};

export default entityByNameReducer;
