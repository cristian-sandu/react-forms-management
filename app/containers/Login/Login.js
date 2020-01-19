import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Icon } from 'antd';

import FormProvider from 'common/form/provider/form-provider';
import TextDirectionProvider from 'common/hooks/text-direction/provider/text-direction-provider';
import { InputField } from 'common/form/components';

import './styles.css';

const style = { fontSize: 13 };
export const INVALID_USERNAME_OR_PASSWORD = 'Username or password are invalid';

const Login = ({ form, onSubmit }) => {
  function handleSubmit() {
    form.validateFields((err, values) => {
      if (err) return;
      onSubmit(form, values);
    });
  }

  return (
    <Form className="login-form" hideRequiredMark>
      <TextDirectionProvider value="ltr">
        <FormProvider value={form}>
          <InputField
            id="username"
            label="User name"
            placeholder="Username"
            prefix={<Icon type="user" style={style} />}
            requiredMessage="Please input your user name!"
          />
          <InputField
            id="password"
            label="Password"
            placeholder="Password"
            prefix={<Icon type="lock" style={style} />}
            requiredMessage="Please input your password!"
            type="password"
          />
          <Button
            type="primary"
            className="login-form-button"
            onClick={handleSubmit}
          >
            Log in
          </Button>
        </FormProvider>
      </TextDirectionProvider>
    </Form>
  );
};

Login.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
};

const withLogin = Form.create();

export default withLogin(Login);
