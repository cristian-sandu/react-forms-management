import { FORMS, REGISTRATION } from '../actions/action-types';

const {
  SUCCESS_SUBMIT_ASSOCIATION_FORM,
  SUCCESS_SUBMIT_ENTITY_FORM,
  RESET_FORM,
} = FORMS;

export const initialState = {
  entityForm: false,
  associationForm: false,
  registration: false,
};

const toggleState = ({ key }, state) => {
  switch (key) {
    case 'entityForm':
      return { ...state, entityForm: initialState.entityForm };

    case 'associationForm':
      return { ...state, associationForm: initialState.associationForm };

    case 'registration':
      return { ...state, registration: initialState.registration };

    default:
      return state;
  }
};

const successResponseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_SUBMIT_ENTITY_FORM:
      return { ...initialState, entityForm: true };

    case SUCCESS_SUBMIT_ASSOCIATION_FORM:
      return { ...initialState, associationForm: true };

    case REGISTRATION.SUCCESS:
      return { ...initialState, registration: true };

    case RESET_FORM:
      return toggleState(payload, state);

    default:
      return state;
  }
};

export default successResponseReducer;
