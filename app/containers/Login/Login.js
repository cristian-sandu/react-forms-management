import React from 'react';
import { Button, Form, Icon } from 'antd';

import FormProvider from 'common/form/provider/form-provider';
import TextDirectionProvider from 'common/hooks/text-direction/provider/text-direction-provider';
import { InputField } from 'common/form/components';

import './styles.css';

const Login = ({ form, onSubmit }) => {
  function handleSubmit() {
    form.validateFields((err, values) => {
      if (err) return;
      onSubmit(values);
    });
  }

  return (
    <Form className="login-form" hideRequiredMark>
      <TextDirectionProvider value="ltr">
        <FormProvider value={form}>
          <InputField
            id="userName"
            label="User name"
            placeholder="Username"
            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
            requiredMessage="Please input your user name!"
          />
          <InputField
            id="password"
            label="Password"
            placeholder="Password"
            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
            requiredMessage="Please input your Password!"
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

const withLogin = Form.create();

export default withLogin(Login);
