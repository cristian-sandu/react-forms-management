import { createSelector } from 'reselect';
import { always, equals, ifElse, prop } from 'ramda';

import { TEXT_DIRECTION } from '../constants';

const { LEFT_TO_RIGHT, RIGHT_TO_LEFT } = TEXT_DIRECTION;

export const languageSelector = prop('language');

export const localeSelector = createSelector(
  languageSelector,
  prop('locale'),
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
