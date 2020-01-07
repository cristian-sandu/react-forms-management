import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Form } from 'antd';
import FormProvider from 'common/form/provider/form-provider';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Section from './Section';
import reducer from './reducer';
import saga from './saga';
import { EntityForm, AssociationForm, Footer } from './components';

const key = 'home';
const formStyle = { height: '100%' };

export function HomePage({ form }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <Section>
        <FormProvider value={form}>
          <Form style={formStyle} hideRequiredMark>
            <EntityForm />
            <Footer />
          </Form>
        </FormProvider>
      </Section>
    </article>
  );
}

HomePage.propTypes = {
  form: PropTypes.object,
};

const withForm = Form.create();

const enhance = compose(
  withForm,
  memo,
);

export default enhance(HomePage);
