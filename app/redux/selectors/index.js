import { createSelector } from 'reselect';
import { always, equals, ifElse, prop, identity } from 'ramda';

import { TEXT_DIRECTION } from 'common/constants';

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
