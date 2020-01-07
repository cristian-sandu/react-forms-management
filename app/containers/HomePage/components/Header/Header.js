import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import { FORM_BY_STEP } from '../../constants';
import messages from './messages';

const { Step } = Steps;

const steps = [
  <Step title={getMsg(messages.ENTITY_FORM)} key="Entity_Form" />,
  <Step title={getMsg(messages.ASSOCIATION_FORM)} key="Association_Form" />,
];

function Header({ step, onStepChange, hasAssociationForm }) {
  return (
    <div style={{ marginTop: '3em' }}>
      {hasAssociationForm && (
        <Steps onChange={onStepChange} current={step}>
          {steps}
        </Steps>
      )}
      <h1 style={{ textAlign: 'center', marginTop: '1em' }}>
        {getMsg(messages[FORM_BY_STEP[step].ID])}
      </h1>
    </div>
  );
}

Header.propTypes = {
  hasAssociationForm: PropTypes.bool,
  step: PropTypes.number,
  onStepChange: PropTypes.func.isRequired,
};

Header.defaultProps = {
  hasAssociationForm: false,
  step: 0,
};

export default Header;
