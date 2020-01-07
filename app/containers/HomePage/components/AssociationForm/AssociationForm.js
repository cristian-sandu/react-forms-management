import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import {
  SelectField,
  InputField,
  InputNumberField,
} from 'common/form/components';
import { isArabicLanguageSelector } from 'common/selectors';

import messages from './messages';
import { ASSOCIATION_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import { CITIES_OPTIONS, PROVINCE_OPTIONS } from '../../utils/select-options';

const getMsg = msg => <FormattedMessage {...msg} />;

const AssociationForm = ({ isVisible }) => {
  const isArabicLanguage = useSelector(isArabicLanguageSelector);

  return (
    <div style={{ display: !isVisible && 'none' }}>
      <InputField
        id={FIELDS.ASSOCIATION_NAME.ID}
        label={getMsg(messages.ASSOCIATION_NAME.LABEL)}
        requiredMessage={getMsg(messages.ASSOCIATION_NAME.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.PERSON_IN_CHARGE.ID}
        label={getMsg(messages.PERSON_IN_CHARGE.LABEL)}
        requiredMessage={getMsg(messages.PERSON_IN_CHARGE.REQUIRED_MESSAGE)}
      />
      <InputNumberField
        id={FIELDS.MOBILE_NUMBER.ID}
        label={getMsg(messages.MOBILE_NUMBER.LABEL)}
        requiredMessage={getMsg(messages.MOBILE_NUMBER.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.ADDRESS.ID}
        label={getMsg(messages.ADDRESS.LABEL)}
        requiredMessage={getMsg(messages.ADDRESS.REQUIRED_MESSAGE)}
      />
      <SelectField
        id={FIELDS.CITY.ID}
        label={getMsg(messages.CITY.LABEL)}
        requiredMessage={getMsg(messages.CITY.REQUIRED_MESSAGE)}
        options={CITIES_OPTIONS}
      />
      <SelectField
        id={FIELDS.PROVINCE.ID}
        label={getMsg(messages.PROVINCE.LABEL)}
        requiredMessage={getMsg(messages.PROVINCE.REQUIRED_MESSAGE)}
        options={PROVINCE_OPTIONS}
      />
      <InputField
        id={FIELDS.EMAIL.ID}
        label={getMsg(messages.EMAIL.LABEL)}
        requiredMessage={getMsg(messages.EMAIL.REQUIRED_MESSAGE)}
        type="email"
      />
      <InputField
        id={FIELDS.WEBSITE.ID}
        label={getMsg(messages.WEBSITE.LABEL)}
        requiredMessage={getMsg(messages.WEBSITE.REQUIRED_MESSAGE)}
      />
    </div>
  );
};

AssociationForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default AssociationForm;
