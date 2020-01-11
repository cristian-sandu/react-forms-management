import { APP_ROUTES } from 'common/constants';

export const ELEMENTS = {
  HOME: {
    ROUTE: APP_ROUTES.HOME,
    STEP: 0,
    NAME: 'Home',
    ID: 'HOME',
    NEXT_STEP: 1,
  },
  ENTITY_FORM: {
    ROUTE: APP_ROUTES.ENTITY_FORM,
    STEP: 1,
    NAME: 'Entity Form',
    ID: 'ENTITY_FORM',
    NEXT_STEP: 2,
  },
  ASSOCIATION_FORM: {
    ROUTE: APP_ROUTES.ASSOCIATION_FORM,
    STEP: 2,
    NAME: 'Association Form',
    ID: 'ASSOCIATION_FORM',
    NEXT_STEP: 0,
  },
};

export const ELEMENTS_BY_STEP = {
  [ELEMENTS.ENTITY_FORM.STEP]: ELEMENTS.ENTITY_FORM,
  [ELEMENTS.ASSOCIATION_FORM.STEP]: ELEMENTS.ASSOCIATION_FORM,
  [ELEMENTS.HOME.STEP]: ELEMENTS.HOME,
};

export const ELEMENTS_BY_NAME = {
  [ELEMENTS.ENTITY_FORM.NAME]: ELEMENTS.ENTITY_FORM,
  [ELEMENTS.ASSOCIATION_FORM.NAME]: ELEMENTS.ASSOCIATION_FORM,
  [ELEMENTS.HOME.NAME]: ELEMENTS.HOME,
};

export const ELEMENTS_BY_PATH = {
  [APP_ROUTES.HOME]: ELEMENTS.HOME,
  [APP_ROUTES.ENTITY_FORM]: ELEMENTS.ENTITY_FORM,
  [APP_ROUTES.ASSOCIATION_FORM]: ELEMENTS.ASSOCIATION_FORM,
};