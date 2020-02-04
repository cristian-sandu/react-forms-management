import { createSelector } from 'reselect';
import { always, equals, ifElse, prop, identity, pipe } from 'ramda';

import { TEXT_DIRECTION } from 'common/constants';
import { REDUCER_KEYS } from '../../common/constants/reducer-keys';

const { LEFT_TO_RIGHT, RIGHT_TO_LEFT } = TEXT_DIRECTION;

export const languageSelector = prop('language');
export const routerSelector = prop('router');

export const localeSelector = createSelector(
  languageSelector,
  prop('locale'),
);

export const locationSelector = createSelector(
  routerSelector,
  prop('location'),
);

export const locationPathnameSelector = createSelector(
  locationSelector,
  prop('pathname'),
);

export const isArabicLanguageSelector = createSelector(
  localeSelector,
  equals('ar'),
);

// prettier-ignore
export const textDirectionSelector = createSelector(
  isArabicLanguageSelector,
  ifElse(
    Boolean,
    always(RIGHT_TO_LEFT),
    always(LEFT_TO_RIGHT),
  ),
);

export const authSelector = createSelector(
  prop('auth'),
  identity,
);

export const userSelector = createSelector(
  authSelector,
  prop('user'),
);

export const isLoggedInSelector = createSelector(
  authSelector,
  prop('loggedIn'),
);

export const userAssociationSelector = createSelector(
  userSelector,
  prop('association'),
);

export const isUserAdminSelector = createSelector(
  userSelector,
  pipe(
    prop('isAdministrator'),
    Boolean,
  ),
);

export const associationByNameSelector = createSelector(
  prop(REDUCER_KEYS.ASSOCIATION_BY_NAME),
  identity,
);

export const entityByNameSelector = createSelector(
  prop(REDUCER_KEYS.ENTITY_BY_NAME),
  identity,
);

export const entityByIdSelector = createSelector(
  prop(REDUCER_KEYS.ENTITY_BY_ID),
  identity,
);

export const successResponseSelector = createSelector(
  prop(REDUCER_KEYS.SUCCESS_RESPONSE),
  identity,
);

export const entityFormSuccessResponseSelector = createSelector(
  successResponseSelector,
  prop('entityForm'),
);

export const associationFormSuccessResponseSelector = createSelector(
  successResponseSelector,
  prop('associationForm'),
);

export const registrationSuccessResponseSelector = createSelector(
  successResponseSelector,
  prop('registration'),
);
