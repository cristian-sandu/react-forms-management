import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from 'components/Footer/Footer';
import FormProvider from 'common/form/provider/form-provider';
import { InputField, InputNumberField } from 'common/form/components';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';
import { useInjectSaga } from 'utils/injectSaga';

import { submitRegistration } from 'redux/actions/registration-actions';
import { resetForm } from 'redux/actions/form-actions';
import { registrationSuccessResponseSelector } from 'redux/selectors';

import { REGISTRATION_FORM_FIELDS_CONFIG as FIELDS } from './utils';
import messages from './messages';
import saga from './sagas';

const SAGA_KEY = 'Registration';
const formStyle = { height: '100%' };

const Registration = ({ form }) => {
  const dispatch = useDispatch();
  const hasSuccess = useSelector(registrationSuccessResponseSelector);

  useInjectSaga({ key: SAGA_KEY, saga });

  useEffect(() => {
    if (hasSuccess) {
      form.resetFields();
      dispatch(resetForm('registration'));
    }
  }, [hasSuccess, form, dispatch]);

  function handleClear() {
    form.resetFields();
  }

  function handleSubmit() {
    form.validateFields((errors, values) => {
      if (errors) return;
      dispatch(submitRegistration(values));
    });
  }

  return (
    <FormProvider value={form}>
      <Form style={formStyle} hideRequiredMark>
        <InputField
          id={FIELDS.USERNAME.ID}
          label={getMsg(messages.USERNAME.LABEL)}
          requiredMessage={getMsg(messages.USERNAME.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.PASSWORD.ID}
          label={getMsg(messages.PASSWORD.LABEL)}
          requiredMessage={getMsg(messages.PASSWORD.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.ENTITY_NAME.ID}
          label={getMsg(messages.ENTITY_NAME.LABEL)}
          requiredMessage={getMsg(messages.ENTITY_NAME.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.ASSOCIATION_NAME.ID}
          label={getMsg(messages.ASSOCIATION_NAME.LABEL)}
          requiredMessage={getMsg(messages.ASSOCIATION_NAME.REQUIRED_MESSAGE)}
        />
        <InputField
          id={FIELDS.CONTACT_PERSON.ID}
          label={getMsg(messages.CONTACT_PERSON.LABEL)}
          requiredMessage={getMsg(messages.CONTACT_PERSON.REQUIRED_MESSAGE)}
        />
        <InputNumberField
          id={FIELDS.MOBILE_NUMBER.ID}
          label={getMsg(messages.MOBILE_NUMBER.LABEL)}
          requiredMessage={getMsg(messages.MOBILE_NUMBER.REQUIRED_MESSAGE)}
        />
        <Footer
          style={{ paddingTop: '1em' }}
          onSubmit={handleSubmit}
          onClear={handleClear}
        />
      </Form>
    </FormProvider>
  );
};

Registration.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create()(Registration);
