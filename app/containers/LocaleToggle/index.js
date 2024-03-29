import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Select } from 'antd';

import { objectToSelectOption } from 'common/form/utils';

import { DEFAULT_LOCALE } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const LANGUAGES_DATASOURCE = {
  en: 'English',
  ar: 'Arabic',
};

const LANGUAGE_SELECT_OPTIONS = objectToSelectOption(LANGUAGES_DATASOURCE);

function LocaleToggle({ locale, onLocaleToggle }) {
  function handleChange(language) {
    onLocaleToggle(language);
  }

  return (
    <div style={{ padding: 5, display: 'flex', justifyContent: 'flex-end' }}>
      <Select
        defaultValue={DEFAULT_LOCALE}
        style={{ width: 150 }}
        onChange={handleChange}
        value={locale}
        size="small"
      >
        {LANGUAGE_SELECT_OPTIONS}
      </Select>
    </div>
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
