import { FETCH_ENTITY_BY_ID } from '../actions/types';

export const initialState = {};

const entityByIdReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ENTITY_BY_ID.SUCCESS:
      return payload.response;

    case FETCH_ENTITY_BY_ID.ERROR:
      return initialState;

    default:
      return state;
  }
};

export default entityByIdReducer;
