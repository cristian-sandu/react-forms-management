import { FETCH_ASSOCIATION_BY_NAME } from '../actions/types';

export const initialState = {};

const associationByNameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ASSOCIATION_BY_NAME.SUCCESS:
      return payload.response;

    case FETCH_ASSOCIATION_BY_NAME.ERROR:
      return initialState;

    default:
      return state;
  }
};

export default associationByNameReducer;
