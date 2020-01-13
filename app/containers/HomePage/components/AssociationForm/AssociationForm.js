import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { pipe } from 'ramda';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';

import Footer from 'components/Footer/Footer';
import {
  InputField,
  InputNumberField,
  SelectField,
} from 'common/form/components';
import FormProvider from 'common/form/provider/form-provider';
import { isArabicLanguageSelector } from 'redux/selectors';
import { submitAssociationForm } from 'redux/actions/form-actions';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';
import { useInjectSaga } from 'utils/injectSaga';

import { ASSOCIATION_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import messages from './messages';
import saga from './sagas/association-form-saga';
import * as SelectOptionsEn from '../../utils/select-options-en';
import * as SelectOptionsAr from '../../utils/select-options-ar';
import { EMPTY_OBJECT } from '../../../../common/constants';

const formStyle = { height: '100%' };
const SAGA_KEY = 'AssociationForm';

const AssociationForm = ({ disabled, form, initialValues }) => {
  const dispatch = useDispatch();
  const isArabicLanguage = useSelector(isArabicLanguageSelector);
  const SelectOptionsSource = isArabicLanguage
    ? SelectOptionsAr
    : SelectOptionsEn;

  useInjectSaga({ key: SAGA_KEY, saga });

  function handleClear() {
    form.resetFields();
  }

  function handleSubmit() {
    form.validateFields((errors, values) => {
      if (errors) return;
      dispatch(submitAssociationForm(values));
    });
  }

  return (
    <FormProvider value={form}>
      <Form style={formStyle} hideRequiredMark>
        <InputField
          disabled={disabled}
          id={FIELDS.ASSOCIATION_NAME.ID}
          initialValue={initialValues[FIELDS.ASSOCIATION_NAME.ID]}
          label={getMsg(messages.ASSOCIATION_NAME.LABEL)}
          requiredMessage={getMsg(messages.ASSOCIATION_NAME.REQUIRED_MESSAGE)}
        />
        <InputField
          disabled={disabled}
          id={FIELDS.PERSON_IN_CHARGE.ID}
          initialValue={initialValues[FIELDS.PERSON_IN_CHARGE.ID]}
          label={getMsg(messages.PERSON_IN_CHARGE.LABEL)}
          requiredMessage={getMsg(messages.PERSON_IN_CHARGE.REQUIRED_MESSAGE)}
        />
        <InputNumberField
          disabled={disabled}
          id={FIELDS.MOBILE_NUMBER.ID}
          initialValue={initialValues[FIELDS.MOBILE_NUMBER.ID]}
          label={getMsg(messages.MOBILE_NUMBER.LABEL)}
          requiredMessage={getMsg(messages.MOBILE_NUMBER.REQUIRED_MESSAGE)}
        />
        <InputField
          disabled={disabled}
          id={FIELDS.ADDRESS.ID}
          initialValue={initialValues[FIELDS.ADDRESS.ID]}
          label={getMsg(messages.ADDRESS.LABEL)}
          requiredMessage={getMsg(messages.ADDRESS.REQUIRED_MESSAGE)}
        />
        <SelectField
          disabled={disabled}
          id={FIELDS.CITY.ID}
          initialValue={initialValues[FIELDS.CITY.ID]}
          label={getMsg(messages.CITY.LABEL)}
          requiredMessage={getMsg(messages.CITY.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.CITIES_OPTIONS}
        />
        <SelectField
          disabled={disabled}
          id={FIELDS.PROVINCE.ID}
          initialValue={initialValues[FIELDS.PROVINCE.ID]}
          label={getMsg(messages.PROVINCE.LABEL)}
          requiredMessage={getMsg(messages.PROVINCE.REQUIRED_MESSAGE)}
          options={SelectOptionsSource.PROVINCE_OPTIONS}
        />
        <InputField
          disabled={disabled}
          id={FIELDS.EMAIL.ID}
          initialValue={initialValues[FIELDS.EMAIL.ID]}
          label={getMsg(messages.EMAIL.LABEL)}
          requiredMessage={getMsg(messages.EMAIL.REQUIRED_MESSAGE)}
          rules={[
            {
              type: 'email',
              message: getMsg(messages.EMAIL.EMAIL_INVALID_MESSAGE),
            },
          ]}
          type="email"
        />
        <InputField
          disabled={disabled}
          id={FIELDS.WEBSITE.ID}
          initialValue={initialValues[FIELDS.WEBSITE.ID]}
          label={getMsg(messages.WEBSITE.LABEL)}
          requiredMessage={getMsg(messages.WEBSITE.REQUIRED_MESSAGE)}
          rules={[
            {
              type: 'url',
              message: getMsg(messages.WEBSITE.WEBSITE_INVALID_MESSAGE),
            },
          ]}
        />
        {!disabled && <Footer onSubmit={handleSubmit} onClear={handleClear} />}
      </Form>
    </FormProvider>
  );
};

AssociationForm.propTypes = {
  form: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  disabled: PropTypes.bool,
  history: PropTypes.object,
};

AssociationForm.defaultProps = {
  disabled: false,
  initialValues: EMPTY_OBJECT,
};

const withForm = Form.create();

const enhance = pipe(
  withForm,
  withRouter,
);

export default enhance(AssociationForm);
