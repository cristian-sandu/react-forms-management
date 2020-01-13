import { ASSOCIATIONS } from './actions/types';

export const initialState = [];

const associationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ASSOCIATIONS.RECEIVE_SUCCESS:
      return [...state, ...payload.associations];

    case ASSOCIATIONS.RECEIVE_ERROR:
      return initialState;

    default:
      return state;
  }
};

export default associationsReducer;
