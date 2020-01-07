/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Select } from 'antd';
import Wrapper from './Wrapper';
import { DEFAULT_LOCALE } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { convertObjectToSelectOptions } from '../../common/form/utils';

const LANGUAGES_DATASOURCE = {
  en: 'English',
  ar: 'Arabic',
};

const LANGUAGE_SELECT_OPTIONS = convertObjectToSelectOptions(
  LANGUAGES_DATASOURCE,
);

export function LocaleToggle({ locale, onLocaleToggle }) {
  function handleChange(language) {
    onLocaleToggle(language);
  }

  return (
    <Wrapper>
      <Select
        defaultValue={DEFAULT_LOCALE}
        style={{ width: 150 }}
        onChange={handleChange}
        value={locale}
      >
        {LANGUAGE_SELECT_OPTIONS}
      </Select>
    </Wrapper>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export const mapDispatchToProps = {
  onLocaleToggle: changeLocale,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
