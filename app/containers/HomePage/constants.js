export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const FORMS = {
  ENTITY_FORM: {
    STEP: 0,
    NAME: 'Entity Form',
    ID: 'ENTITY_FORM',
    NEXT_STEP: 1,
  },
  ASSOCIATION_FORM: {
    STEP: 1,
    NAME: 'Association Form',
    ID: 'ASSOCIATION_FORM',
    NEXT_STEP: 0,
  },
};

export const FORM_BY_STEP = {
  [FORMS.ENTITY_FORM.STEP]: FORMS.ENTITY_FORM,
  [FORMS.ASSOCIATION_FORM.STEP]: FORMS.ASSOCIATION_FORM,
};
