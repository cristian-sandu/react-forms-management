import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Form } from 'antd';

import { useTextDirection } from 'common/hooks';
import { TEXT_DIRECTION } from 'common/constants';
import {
  FormField,
  ImageUpload,
  InputField,
  InputNumberField,
  SelectField,
} from 'common/form/components';
import FormProvider from 'common/form/provider/form-provider';
import { isArabicLanguageSelector } from 'redux/selectors';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import { ENTITY_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import messages from './messages';
import * as SelectOptionsEn from '../../utils/select-options-en';
import * as SelectOptionsAr from '../../utils/select-options-ar';

const { RIGHT_TO_LEFT } = TEXT_DIRECTION;
const formStyle = { height: '100%' };

const EntityForm = ({ form }) => {
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;
  const isArabicLanguage = useSelector(isArabicLanguageSelector);
  const SelectOptionsSource = isArabicLanguage
    ? SelectOptionsAr
    : SelectOptionsEn;

  const handleImageUpload = fieldID => img => {
    form.setFieldsValue({
      [fieldID]: img,
    });
  };

  return (
    <FormProvider value={form}>
      <Form style={formStyle} hideRequiredMark>
        <InputField
          id={FIELDS.ENTITY_NAME.ID}
          label={getMsg(messages.ENTITY_NAME.LABEL)}
          requiredMessage={getMsg(messages.ENTITY_NAME.REQUIRED_MESSAGE)}
          isRTLDirection={isRTLDirection}
        />
        <FormField
          id={FIELDS.TRADE_MARK.ID}
          label={getMsg(messages.TRADE_MARK.LABEL)}
          requiredMessage={getMsg(messages.TRADE_MARK.REQUIRED_MESSAGE)}
        >
          <ImageUpload
            onUpload={handleImageUpload(FIELDS.TRADE_MARK.ID)}
            title={getMsg(messages.UPLOAD.LABEL)}
            isRTL={isRTLDirection}
          />
        </FormField>
        <SelectField
          id={FIELDS.SPECIALIZATION.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.SPECIALIZATION.LABEL)}
          requiredMessage={getMsg(messages.SPECIALIZATION.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.SPECIALIZATION_OPTIONS}
        />
        <InputField
          id={FIELDS.PERSON_IN_CHARGE.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.PERSON_IN_CHARGE.LABEL)}
          requiredMessage={getMsg(messages.PERSON_IN_CHARGE.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.GENDER.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.GENDER.LABEL)}
          requiredMessage={getMsg(messages.GENDER.REQUIRED_MESSAGE)}
        />
        <InputNumberField
          id={FIELDS.NATIONAL_ID_NUMBER.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NATIONAL_ID_NUMBER.LABEL)}
          requiredMessage={getMsg(messages.NATIONAL_ID_NUMBER.REQUIRED_MESSAGE)}
        />
        <InputNumberField
          id={FIELDS.OFFICE_TEL_NUMBER.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.OFFICE_TEL_NUMBER.LABEL)}
          requiredMessage={getMsg(messages.OFFICE_TEL_NUMBER.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.EMAIL_ADDRESS.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.EMAIL_ADDRESS.LABEL)}
          requiredMessage={getMsg(messages.EMAIL_ADDRESS.REQUIRED_MESSAGE)}
          rules={[
            {
              type: 'email',
              message: getMsg(messages.EMAIL_ADDRESS.EMAIL_INVALID_MESSAGE),
            },
          ]}
          type="email"
        />
        <InputField
          id={FIELDS.SOCIAL_MEDIA.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.SOCIAL_MEDIA.LABEL)}
          requiredMessage={getMsg(messages.SOCIAL_MEDIA.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.ADDRESS.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.ADDRESS.LABEL)}
          requiredMessage={getMsg(messages.ADDRESS.REQUIRED_MESSAGE)}
        />
        <SelectField
          id={FIELDS.CITY.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.CITY.LABEL)}
          requiredMessage={getMsg(messages.CITY.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.CITIES_OPTIONS}
        />
        <SelectField
          id={FIELDS.PROVINCE.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.PROVINCE.LABEL)}
          requiredMessage={getMsg(messages.PROVINCE.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.PROVINCE_OPTIONS}
        />
        <InputNumberField
          id={FIELDS.NUMBER_OF_NATIONAL_EMPLOYEES.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NUMBER_OF_NATIONAL_EMPLOYEES.LABEL)}
          requiredMessage={getMsg(
            messages.NUMBER_OF_NATIONAL_EMPLOYEES.REQUIRED_MESSAGE,
          )}
        />
        <InputNumberField
          id={FIELDS.NUMBER_OF__NON_NATIONAL_EMPLOYEES.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.LABEL)}
          requiredMessage={getMsg(
            messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.REQUIRED_MESSAGE,
          )}
        />
        <SelectField
          id={FIELDS.STATUS.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.STATUS.LABEL)}
          requiredMessage={getMsg(messages.STATUS.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.STATUS_OPTIONS}
        />
        <InputNumberField
          id={FIELDS.VALUE_OF_FUNDING.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.VALUE_OF_FUNDING.LABEL)}
          requiredMessage={getMsg(messages.VALUE_OF_FUNDING.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.NAME_OF_ASSOCIATION.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NAME_OF_ASSOCIATION.LABEL)}
          requiredMessage={getMsg(
            messages.NAME_OF_ASSOCIATION.REQUIRED_MESSAGE,
          )}
        />
        <InputField
          id={FIELDS.PROFILE.ID}
          isRTLDirection={isRTLDirection}
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
            title={getMsg(messages.UPLOAD.LABEL)}
            isRTL={isRTLDirection}
            onUpload={handleImageUpload(FIELDS.COMMERCIAL_REGISTRATION.ID)}
          />
        </FormField>
        <InputField
          id={FIELDS.ISIC_CLASSIFICATION_NUMBER.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.ISIC_CLASSIFICATION_NUMBER.LABEL)}
          requiredMessage={getMsg(
            messages.ISIC_CLASSIFICATION_NUMBER.REQUIRED_MESSAGE,
          )}
        />
      </Form>
    </FormProvider>
  );
};

EntityForm.propTypes = {
  form: PropTypes.object.isRequired,
};

const withForm = Form.create();

export default withForm(EntityForm);
