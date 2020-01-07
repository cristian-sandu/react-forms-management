import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import { FORM_BY_STEP } from '../../constants';

const { Step } = Steps;

const steps = [
  <Step title="Entity Form" key="Entity_Form" />,
  <Step title="Association Form" key="Association_Form" />,
];

function Header({ step, onStepChange }) {
  return (
    <div style={{ marginTop: '3em' }}>
      <Steps onChange={onStepChange} current={step}>
        {steps}
      </Steps>
      <h1 style={{ textAlign: 'center', marginTop: '1em' }}>
        {FORM_BY_STEP[step].NAME}
      </h1>
    </div>
  );
}

Header.propTypes = {
  step: PropTypes.number,
  onStepChange: PropTypes.func.isRequired,
};

Header.defaultProps = {
  step: 0,
};

export default Header;
