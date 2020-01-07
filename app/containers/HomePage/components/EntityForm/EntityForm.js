import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import {
  SelectField,
  InputField,
  InputNumberField,
  FormField,
  ImageUpload,
} from 'common/form/components';
import useFormContext from 'common/form/consumer/form-consumer';
import { isArabicLanguageSelector } from 'common/selectors';

import { ENTITY_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import {
  CITIES_OPTIONS,
  PROVINCE_OPTIONS,
  SPECIALIZATION_OPTIONS,
  STATUS_OPTIONS,
} from '../../utils/select-options';
import messages from './messages';

const getMsg = msg => <FormattedMessage {...msg} />;

const EntityForm = ({ isVisible }) => {
  const form = useFormContext();
  const isArabicLanguage = useSelector(isArabicLanguageSelector);

  const handleImageUpload = fieldID => img => {
    form.setFieldsValue({
      [fieldID]: img,
    });
  };

  return (
    <div style={{ display: !isVisible && 'none' }}>
      <InputField
        id={FIELDS.ENTITY_NAME.ID}
        label={getMsg(messages.ENTITY_NAME.LABEL)}
        requiredMessage={getMsg(messages.ENTITY_NAME.REQUIRED_MESSAGE)}
      />
      <FormField
        id={FIELDS.TRADE_MARK.ID}
        label={getMsg(messages.TRADE_MARK.LABEL)}
        requiredMessage={getMsg(messages.TRADE_MARK.REQUIRED_MESSAGE)}
      >
        <ImageUpload onUpload={handleImageUpload(FIELDS.TRADE_MARK.ID)} />
      </FormField>
      <SelectField
        id={FIELDS.SPECIALIZATION.ID}
        label={getMsg(messages.SPECIALIZATION.LABEL)}
        requiredMessage={getMsg(messages.SPECIALIZATION.REQUIRED_MESSAGE)}
        options={SPECIALIZATION_OPTIONS}
      />
      <InputField
        id={FIELDS.PERSON_IN_CHARGE.ID}
        label={getMsg(messages.PERSON_IN_CHARGE.LABEL)}
        requiredMessage={getMsg(messages.PERSON_IN_CHARGE.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.GENDER.ID}
        label={getMsg(messages.GENDER.LABEL)}
        requiredMessage={getMsg(messages.GENDER.REQUIRED_MESSAGE)}
      />
      <InputNumberField
        id={FIELDS.NATIONAL_ID_NUMBER.ID}
        label={getMsg(messages.NATIONAL_ID_NUMBER.LABEL)}
        requiredMessage={getMsg(messages.NATIONAL_ID_NUMBER.REQUIRED_MESSAGE)}
      />
      <InputNumberField
        id={FIELDS.OFFICE_TEL_NUMBER.ID}
        label={getMsg(messages.OFFICE_TEL_NUMBER.LABEL)}
        requiredMessage={getMsg(messages.OFFICE_TEL_NUMBER.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.EMAIL_ADDRESS.ID}
        label={getMsg(messages.EMAIL_ADDRESS.LABEL)}
        requiredMessage={getMsg(messages.EMAIL_ADDRESS.REQUIRED_MESSAGE)}
        type="email"
      />
      <InputField
        id={FIELDS.SOCIAL_MEDIA.ID}
        label={getMsg(messages.SOCIAL_MEDIA.LABEL)}
        requiredMessage={getMsg(messages.SOCIAL_MEDIA.REQUIRED_MESSAGE)}
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
      <InputNumberField
        id={FIELDS.NUMBER_OF_NATIONAL_EMPLOYEES.ID}
        label={getMsg(messages.NUMBER_OF_NATIONAL_EMPLOYEES.LABEL)}
        requiredMessage={getMsg(
          messages.NUMBER_OF_NATIONAL_EMPLOYEES.REQUIRED_MESSAGE,
        )}
      />
      <InputNumberField
        id={FIELDS.NUMBER_OF__NON_NATIONAL_EMPLOYEES.ID}
        label={getMsg(messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.LABEL)}
        requiredMessage={getMsg(
          messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.REQUIRED_MESSAGE,
        )}
      />
      <SelectField
        id={FIELDS.STATUS.ID}
        label={getMsg(messages.STATUS.LABEL)}
        requiredMessage={getMsg(messages.STATUS.REQUIRED_MESSAGE)}
        options={STATUS_OPTIONS}
      />
      <InputNumberField
        id={FIELDS.VALUE_OF_FUNDING.ID}
        label={getMsg(messages.VALUE_OF_FUNDING.LABEL)}
        requiredMessage={getMsg(messages.VALUE_OF_FUNDING.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.NAME_OF_ASSOCIATION.ID}
        label={getMsg(messages.NAME_OF_ASSOCIATION.LABEL)}
        requiredMessage={getMsg(messages.NAME_OF_ASSOCIATION.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.PROFILE.ID}
        label={getMsg(messages.PROFILE.LABEL)}
        requiredMessage={getMsg(messages.PROFILE.REQUIRED_MESSAGE)}
      />
      <FormField
        id={FIELDS.COMMERCIAL_REGISTRATION.ID}
        label={getMsg(messages.COMMERCIAL_REGISTRATION.LABEL)}
        requiredMessage={getMsg(
          messages.COMMERCIAL_REGISTRATION.REQUIRED_MESSAGE,
        )}
      >
        <ImageUpload
          onUpload={handleImageUpload(FIELDS.COMMERCIAL_REGISTRATION.ID)}
        />
      </FormField>
      <InputField
        id={FIELDS.ISIC_CLASSIFICATION_NUMBER.ID}
        label={getMsg(messages.ISIC_CLASSIFICATION_NUMBER.LABEL)}
        requiredMessage={getMsg(
          messages.ISIC_CLASSIFICATION_NUMBER.REQUIRED_MESSAGE,
        )}
      />
    </div>
  );
};

EntityForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default EntityForm;
