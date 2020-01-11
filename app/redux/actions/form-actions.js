import { FORMS } from './action-types';

const { SUBMIT_ASSOCIATION_FORM, SUBMIT_ENTITY_FORM } = FORMS;

export const submitAssociationForm = data => ({
  type: SUBMIT_ASSOCIATION_FORM,
  payload: {
    data,
  },
});

export const submitEntityForm = data => ({
  type: SUBMIT_ENTITY_FORM,
  payload: {
    data,
  },
});
