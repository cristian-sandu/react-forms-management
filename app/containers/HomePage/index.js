import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import { Form } from 'antd';

import FormProvider from 'common/form/provider/form-provider';
import TextDirectionProvider from 'common/hooks/text-direction/provider/text-direction-provider';
import { textDirectionSelector } from 'common/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Section from './Section';
import reducer from './reducer';
import saga from './saga';
import { FORMS } from './constants';
import { AssociationForm, EntityForm, Footer, Header } from './components';

const key = 'home';
const formStyle = { height: '100%' };

const { ASSOCIATION_FORM, ENTITY_FORM } = FORMS;

export function HomePage({ form, hasAssociationForm = true }) {
  const [step, setNextStep] = useState(ENTITY_FORM.STEP);
  const textDirection = useSelector(textDirectionSelector);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  function handleStepChange(currentStep) {
    setNextStep(currentStep);
  }

  return (
    <article>
      <Header
        hasAssociationForm={hasAssociationForm}
        step={step}
        onStepChange={handleStepChange}
      />
      <Section>
        <TextDirectionProvider value={textDirection}>
          <FormProvider value={form}>
            <Form style={formStyle} hideRequiredMark>
              <EntityForm isVisible={step === ENTITY_FORM.STEP} />
              <AssociationForm isVisible={step === ASSOCIATION_FORM.STEP} />
              <Footer />
            </Form>
          </FormProvider>
        </TextDirectionProvider>
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
