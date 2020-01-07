import { createSelector } from 'reselect';
import { equals, prop } from 'ramda';

export const languageSelector = prop('language');

export const localeSelector = createSelector(
  languageSelector,
  prop('locale'),
);

export const isArabicLanguageSelector = createSelector(
  localeSelector,
  equals('ar'),
);
