import { FORMS } from './action-types';

const {
  SUCCESS_SUBMIT_ASSOCIATION_FORM,
  ERROR_SUBMIT_ASSOCIATION_FORM,
  ERROR_SUBMIT_ENTITY_FORM,
  SUCCESS_SUBMIT_ENTITY_FORM,
  SUBMIT_ASSOCIATION_FORM,
  SUBMIT_ENTITY_FORM,
} = FORMS;

export const submitAssociationForm = data => ({
  type: SUBMIT_ASSOCIATION_FORM,
  payload: {
    data,
  },
});

export const successSubmitAssociationForm = response => ({
  type: SUCCESS_SUBMIT_ASSOCIATION_FORM,
  payload: {
    response,
  },
});

export const errorSubmitAssociationForm = () => ({
  type: ERROR_SUBMIT_ASSOCIATION_FORM,
});

export const submitEntityForm = data => ({
  type: SUBMIT_ENTITY_FORM,
  payload: {
    data,
  },
});

export const succesSubmitEntityForm = () => ({
  type: SUCCESS_SUBMIT_ENTITY_FORM,
});

export const errorSubmitEntityForm = () => ({
  type: ERROR_SUBMIT_ENTITY_FORM,
});
