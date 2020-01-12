import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { pipe } from 'ramda';
import { withRouter } from 'react-router-dom';
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
import {
  isArabicLanguageSelector,
  userAssociationSelector,
} from 'redux/selectors';
import { submitEntityForm } from 'redux/actions/form-actions';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import Footer from '../Footer/Footer';
import { ENTITY_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import messages from './messages';
import * as SelectOptionsEn from '../../utils/select-options-en';
import * as SelectOptionsAr from '../../utils/select-options-ar';
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from './sagas/entity-form-saga';

const { RIGHT_TO_LEFT } = TEXT_DIRECTION;
const formStyle = { height: '100%' };
const SAGA_KEY = 'AssociationForm';

const EntityForm = ({ form }) => {
  const dispatch = useDispatch();
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;
  const isArabicLanguage = useSelector(isArabicLanguageSelector);
  const userAssociation = useSelector(userAssociationSelector);

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
          label={getMsg(messages.ENTITY_NAME.LABEL)}
          requiredMessage={getMsg(messages.ENTITY_NAME.REQUIRED_MESSAGE)}
          isRTLDirection={isRTLDirection}
        />
        <FormField
          id={FIELDS.TRADE_MARK.ID}
          label={getMsg(messages.TRADE_MARK.LABEL)}
          required={false}
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
          required={false}
        />
        <InputNumberField
          id={FIELDS.NATIONAL_ID_NUMBER.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NATIONAL_ID_NUMBER.LABEL)}
          required={false}
        />
        <InputNumberField
          id={FIELDS.OFFICE_TEL_NUMBER.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.OFFICE_TEL_NUMBER.LABEL)}
          required={false}
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
          required={false}
        />
        <InputField
          id={FIELDS.ADDRESS.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.ADDRESS.LABEL)}
          required={false}
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
          required={false}
          options={SelectOptionsSource.PROVINCE_OPTIONS}
        />
        <InputNumberField
          id={FIELDS.NUMBER_OF_NATIONAL_EMPLOYEES.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NUMBER_OF_NATIONAL_EMPLOYEES.LABEL)}
          required={false}
        />
        <InputNumberField
          id={FIELDS.NUMBER_OF__NON_NATIONAL_EMPLOYEES.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NUMBER_OF__NON_NATIONAL_EMPLOYEES.LABEL)}
          required={false}
        />
        <SelectField
          id={FIELDS.STATUS.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.STATUS.LABEL)}
          required={false}
          options={SelectOptionsSource.STATUS_OPTIONS}
        />
        <InputNumberField
          id={FIELDS.VALUE_OF_FUNDING.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.VALUE_OF_FUNDING.LABEL)}
          required={false}
        />
        <InputField
          id={FIELDS.NAME_OF_ASSOCIATION.ID}
          initialValue={userAssociation}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.NAME_OF_ASSOCIATION.LABEL)}
          required={false}
        />
        <InputField
          id={FIELDS.PROFILE.ID}
          isRTLDirection={isRTLDirection}
          label={getMsg(messages.PROFILE.LABEL)}
          required={false}
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
          required={false}
        />
        <Footer onSubmit={handleSubmit} onClear={handleClear} />
      </Form>
    </FormProvider>
  );
};

EntityForm.propTypes = {
  form: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const withForm = Form.create();

const enhance = pipe(
  withForm,
  withRouter,
);

export default enhance(EntityForm);
