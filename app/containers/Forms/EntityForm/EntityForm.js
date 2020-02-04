import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { pipe } from 'ramda';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';

import {
  FormField,
  ImageUpload,
  InputField,
  InputNumberField,
  SelectField,
} from 'common/form/components';
import { EMPTY_OBJECT } from 'common/constants';
import FormProvider from 'common/form/provider/form-provider';
import Footer from 'components/Footer/Footer';
import {
  entityFormSuccessResponseSelector,
  isArabicLanguageSelector,
  userAssociationSelector,
} from 'redux/selectors';
import { submitEntityForm, resetForm } from 'redux/actions/form-actions';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';
import * as SelectOptionsEn from 'utils/select-options/select-options-en';
import * as SelectOptionsAr from 'utils/select-options/select-options-ar';
import { useInjectSaga } from 'utils/injectSaga';

import { ENTITY_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import messages from './messages';
import saga from './sagas/entity-form-saga';

const formStyle = { height: '100%' };
const SAGA_KEY = 'AssociationForm';

const EntityForm = ({ form, disabled, initialValues }) => {
  const dispatch = useDispatch();
  const isArabicLanguage = useSelector(isArabicLanguageSelector);
  const userAssociation = useSelector(userAssociationSelector);
  const hasSuccess = useSelector(entityFormSuccessResponseSelector);

  useEffect(() => {
    if (hasSuccess) {
      form.resetFields();
      dispatch(resetForm('entityForm'));
    }
  }, [hasSuccess, form, dispatch]);

  const SelectOptionsSource = isArabicLanguage
    ? SelectOptionsAr
    : SelectOptionsEn;

  useInjectSaga({ key: SAGA_KEY, saga });

  const handleImageUpload = fieldID => img => {
    form.setFieldsValue({
      [fieldID]: img,
    });
  };

  function handleClear() {
    form.resetFields();
  }

  function handleSubmit() {
    form.validateFields((errors, values) => {
      if (errors) return;
      dispatch(submitEntityForm(values));
    });
  }

  return (
    <FormProvider value={form}>
      <Form style={formStyle} hideRequiredMark>
        <InputField
          id={FIELDS.ENTITY_NAME.ID}
          initialValue={initialValues[FIELDS.ENTITY_NAME.ID]}
          label={getMsg(messages.ENTITY_NAME.LABEL)}
          requiredMessage={getMsg(messages.ENTITY_NAME.REQUIRED_MESSAGE)}
          disabled={disabled}
        />
        <FormField
          id={FIELDS.TRADE_MARK.ID}
          initialValue={initialValues[FIELDS.TRADE_MARK.ID]}
          label={getMsg(messages.TRADE_MARK.LABEL)}
          required={false}
          disabled={disabled}
        >
          <ImageUpload
            onUpload={handleImageUpload(FIELDS.TRADE_MARK.ID)}
            title={getMsg(messages.UPLOAD.LABEL)}
            disabled={disabled}
          />
        </FormField>
        <SelectField
          id={FIELDS.SPECIALIZATION.ID}
          initialValue={initialValues[FIELDS.SPECIALIZATION.ID]}
          label={getMsg(messages.SPECIALIZATION.LABEL)}
          requiredMessage={getMsg(messages.SPECIALIZATION.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.SPECIALIZATION_OPTIONS}
          disabled={disabled}
        />
        <InputField
          id={FIELDS.PERSON_IN_CHARGE.ID}
          initialValue={initialValues[FIELDS.PERSON_IN_CHARGE.ID]}
          label={getMsg(messages.PERSON_IN_CHARGE.LABEL)}
          requiredMessage={getMsg(messages.PERSON_IN_CHARGE.REQUIRED_MESSAGE)}
          disabled={disabled}
        />
        <InputField
          id={FIELDS.GENDER.ID}
          initialValue={initialValues[FIELDS.GENDER.ID]}
          label={getMsg(messages.GENDER.LABEL)}
          required={false}
          disabled={disabled}
        />
        <InputNumberField
          id={FIELDS.NATIONAL_ID_NUMBER.ID}
          initialValue={initialValues[FIELDS.NATIONAL_ID_NUMBER.ID]}
          label={getMsg(messages.NATIONAL_ID_NUMBER.LABEL)}
          required={false}
          disabled={disabled}
        />
        <InputNumberField
          id={FIELDS.OFFICE_TEL_NUMBER.ID}
          initialValue={initialValues[FIELDS.OFFICE_TEL_NUMBER.ID]}
          label={getMsg(messages.OFFICE_TEL_NUMBER.LABEL)}
          required={false}
          disabled={disabled}
        />
        <InputField
          id={FIELDS.EMAIL_ADDRESS.ID}
          initialValue={initialValues[FIELDS.EMAIL_ADDRESS.ID]}
          label={getMsg(messages.EMAIL_ADDRESS.LABEL)}
          requiredMessage={getMsg(messages.EMAIL_ADDRESS.REQUIRED_MESSAGE)}
          rules={[
            {
              type: 'email',
              message: getMsg(messages.EMAIL_ADDRESS.EMAIL_INVALID_MESSAGE),
            },
          ]}
          type="email"
          disabled={disabled}
        />
        <InputField
          id={FIELDS.SOCIAL_MEDIA.ID}
          initialValue={initialValues[FIELDS.SOCIAL_MEDIA.ID]}
          label={getMsg(messages.SOCIAL_MEDIA.LABEL)}
          required={false}
          disabled={disabled}
        />
        <InputField
          id={FIELDS.ADDRESS.ID}
          initialValue={initialValues[FIELDS.ADDRESS.ID]}
          label={getMsg(messages.ADDRESS.LABEL)}
          required={false}
          disabled={disabled}
        />
        <SelectField
          id={FIELDS.CITY.ID}
          initialValue={initialValues[FIELDS.CITY.ID]}
          label={getMsg(messages.CITY.LABEL)}
          requiredMessage={getMsg(messages.CITY.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.CITIES_OPTIONS}
          disabled={disabled}
        />
        <SelectField
          id={FIELDS.PROVINCE.ID}
          initialValue={initialValues[FIELDS.PROVINCE.ID]}
          label={getMsg(messages.PROVINCE.LABEL)}
          required={false}
          options={SelectOptionsSource.PROVINCE_OPTIONS}
          disabled={disabled}
        />
        <InputNumberField
          id={FIELDS.NUMBER_OF_NATIONAL_EMPLOYEES.ID}
          initialValue={initialValues[FIELDS.NUMBER_OF_NATIONAL_EMPLOYEES.ID]}
          label={getMsg(messages.NUMBER_OF_NATIONAL_EMPLOYEES.LABEL)}
          required={false}
          disabled={disabled}
        />
        <InputNumberField
          id={FIELDS.NUMBER_OF__NON_NATIONAL_EMPLOYEES.ID}
          initialValue={
            initialValues[FIELDS.NUMBER_OF__NON_NATIONAL_EMPLOYEES.ID]
          }
          label={getMsg(messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.LABEL)}
          required={false}
          disabled={disabled}
        />
        <SelectField
          id={FIELDS.STATUS.ID}
          initialValue={initialValues[FIELDS.STATUS.ID]}
          label={getMsg(messages.STATUS.LABEL)}
          required={false}
          options={SelectOptionsSource.STATUS_OPTIONS}
          disabled={disabled}
        />
        <InputNumberField
          id={FIELDS.VALUE_OF_FUNDING.ID}
          initialValue={initialValues[FIELDS.VALUE_OF_FUNDING.ID]}
          label={getMsg(messages.VALUE_OF_FUNDING.LABEL)}
          required={false}
          disabled={disabled}
        />
        <InputField
          id={FIELDS.NAME_OF_ASSOCIATION.ID}
          initialValue={
            initialValues[FIELDS.NAME_OF_ASSOCIATION.ID] || userAssociation
          }
          label={getMsg(messages.NAME_OF_ASSOCIATION.LABEL)}
          required={false}
          disabled={disabled}
        />
        <InputField
          id={FIELDS.PROFILE.ID}
          initialValue={initialValues[FIELDS.PROFILE.ID]}
          label={getMsg(messages.PROFILE.LABEL)}
          required={false}
          disabled={disabled}
        />
        <FormField
          id={FIELDS.COMMERCIAL_REGISTRATION.ID}
          initialValue={initialValues[FIELDS.COMMERCIAL_REGISTRATION.ID]}
          label={getMsg(messages.COMMERCIAL_REGISTRATION.LABEL)}
          required={false}
          disabled={disabled}
        >
          <ImageUpload
            initialValue={initialValues[FIELDS.COMMERCIAL_REGISTRATION.ID]}
            title={getMsg(messages.UPLOAD.LABEL)}
            onUpload={handleImageUpload(FIELDS.COMMERCIAL_REGISTRATION.ID)}
            disabled={disabled}
          />
        </FormField>
        <InputField
          id={FIELDS.ISIC_CLASSIFICATION_NUMBER.ID}
          initialValue={initialValues[FIELDS.ISIC_CLASSIFICATION_NUMBER.ID]}
          label={getMsg(messages.ISIC_CLASSIFICATION_NUMBER.LABEL)}
          required={false}
          disabled={disabled}
        />
        {!disabled && <Footer onSubmit={handleSubmit} onClear={handleClear} />}
      </Form>
    </FormProvider>
  );
};

EntityForm.propTypes = {
  initialValues: PropTypes.object,
  form: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

EntityForm.defaultProps = {
  disabled: false,
  initialValues: EMPTY_OBJECT,
};

const withForm = Form.create();

const enhance = pipe(
  withForm,
  withRouter,
);

export default enhance(EntityForm);
