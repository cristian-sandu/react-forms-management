import React from 'react';
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
} from './mocks';
import messages from './messages';

const EntityForm = () => {
  const form = useFormContext();
  const isArabicLanguage = useSelector(isArabicLanguageSelector);

  const handleImageUpload = fieldID => img => {
    form.setFieldsValue({
      [fieldID]: img,
    });
  };

  return (
    <div>
      <InputField
        id={FIELDS.ENTITY_NAME.ID}
        label={<FormattedMessage {...messages.ENTITY_NAME.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.ENTITY_NAME.REQUIRED_MESSAGE} />
        }
      />
      <FormField
        id={FIELDS.TRADE_MARK.ID}
        label={<FormattedMessage {...messages.TRADE_MARK.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.TRADE_MARK.REQUIRED_MESSAGE} />
        }
      >
        <ImageUpload onUpload={handleImageUpload(FIELDS.TRADE_MARK.ID)} />
      </FormField>
      <SelectField
        id={FIELDS.SPECIALIZATION.ID}
        label={<FormattedMessage {...messages.SPECIALIZATION.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.SPECIALIZATION.REQUIRED_MESSAGE} />
        }
        options={SPECIALIZATION_OPTIONS}
      />
      <InputField
        id={FIELDS.PERSON_IN_CHARGE.ID}
        label={<FormattedMessage {...messages.PERSON_IN_CHARGE.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.PERSON_IN_CHARGE.REQUIRED_MESSAGE} />
        }
      />
      <InputField
        id={FIELDS.GENDER.ID}
        label={<FormattedMessage {...messages.GENDER.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.GENDER.REQUIRED_MESSAGE} />
        }
      />
      <InputNumberField
        id={FIELDS.NATIONAL_ID_NUMBER.ID}
        label={<FormattedMessage {...messages.NATIONAL_ID_NUMBER.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.NATIONAL_ID_NUMBER.REQUIRED_MESSAGE} />
        }
      />
      <InputNumberField
        id={FIELDS.OFFICE_TEL_NUMBER.ID}
        label={<FormattedMessage {...messages.OFFICE_TEL_NUMBER.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.OFFICE_TEL_NUMBER.REQUIRED_MESSAGE} />
        }
      />
      <InputField
        id={FIELDS.EMAIL_ADDRESS.ID}
        label={<FormattedMessage {...messages.EMAIL_ADDRESS.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.EMAIL_ADDRESS.REQUIRED_MESSAGE} />
        }
        type="email"
      />
      <InputField
        id={FIELDS.SOCIAL_MEDIA.ID}
        label={<FormattedMessage {...messages.SOCIAL_MEDIA.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.SOCIAL_MEDIA.REQUIRED_MESSAGE} />
        }
      />
      <InputField
        id={FIELDS.ADDRESS.ID}
        label={<FormattedMessage {...messages.ADDRESS.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.ADDRESS.REQUIRED_MESSAGE} />
        }
      />
      <SelectField
        id={FIELDS.CITY.ID}
        label={<FormattedMessage {...messages.CITY.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.CITY.REQUIRED_MESSAGE} />
        }
        options={CITIES_OPTIONS}
      />
      <SelectField
        id={FIELDS.PROVINCE.ID}
        label={<FormattedMessage {...messages.PROVINCE.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.PROVINCE.REQUIRED_MESSAGE} />
        }
        options={PROVINCE_OPTIONS}
      />
      <InputNumberField
        id={FIELDS.NUMBER_OF_NATIONAL_EMPLOYEES.ID}
        label={
          <FormattedMessage {...messages.NUMBER_OF_NATIONAL_EMPLOYEES.LABEL} />
        }
        requiredMessage={
          <FormattedMessage
            {...messages.NUMBER_OF_NATIONAL_EMPLOYEES.REQUIRED_MESSAGE}
          />
        }
      />
      <InputNumberField
        id={FIELDS.NUMBER_OF__NON_NATIONAL_EMPLOYEES.ID}
        label={
          <FormattedMessage
            {...messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.LABEL}
          />
        }
        requiredMessage={
          <FormattedMessage
            {...messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.REQUIRED_MESSAGE}
          />
        }
      />
      <SelectField
        id={FIELDS.STATUS.ID}
        label={<FormattedMessage {...messages.STATUS.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.STATUS.REQUIRED_MESSAGE} />
        }
        options={STATUS_OPTIONS}
      />
      <InputNumberField
        id={FIELDS.VALUE_OF_FUNDING.ID}
        label={<FormattedMessage {...messages.VALUE_OF_FUNDING.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.VALUE_OF_FUNDING.REQUIRED_MESSAGE} />
        }
      />
      <InputField
        id={FIELDS.NAME_OF_ASSOCIATION.ID}
        label={<FormattedMessage {...messages.NAME_OF_ASSOCIATION.LABEL} />}
        requiredMessage={
          <FormattedMessage
            {...messages.NAME_OF_ASSOCIATION.REQUIRED_MESSAGE}
          />
        }
      />
      <InputField
        id={FIELDS.PROFILE.ID}
        label={<FormattedMessage {...messages.PROFILE.LABEL} />}
        requiredMessage={
          <FormattedMessage {...messages.PROFILE.REQUIRED_MESSAGE} />
        }
      />
      <FormField
        id={FIELDS.COMMERCIAL_REGISTRATION.ID}
        label={<FormattedMessage {...messages.COMMERCIAL_REGISTRATION.LABEL} />}
        requiredMessage={
          <FormattedMessage
            {...messages.COMMERCIAL_REGISTRATION.REQUIRED_MESSAGE}
          />
        }
      >
        <ImageUpload
          onUpload={handleImageUpload(FIELDS.COMMERCIAL_REGISTRATION.ID)}
        />
      </FormField>
      <InputField
        id={FIELDS.ISIC_CLASSIFICATION_NUMBER.ID}
        label={
          <FormattedMessage {...messages.ISIC_CLASSIFICATION_NUMBER.LABEL} />
        }
        requiredMessage={
          <FormattedMessage
            {...messages.ISIC_CLASSIFICATION_NUMBER.REQUIRED_MESSAGE}
          />
        }
      />
    </div>
  );
};

export default EntityForm;
