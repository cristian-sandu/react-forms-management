import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import { withRouter } from 'react-router-dom';

import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import { FORM_BY_NAME, FORM_BY_STEP, FORMS } from '../../constants';
import messages from './messages';

const { Step } = Steps;

const steps = [
  <Step title={getMsg(messages.ENTITY_FORM)} key="Entity_Form" />,
  <Step title={getMsg(messages.ASSOCIATION_FORM)} key="Association_Form" />,
];

function Header({ hasAssociationForm, history }) {
  const [activeForm, setNextForm] = useState(FORMS.ENTITY_FORM.NAME);
  const { STEP, ID } = FORM_BY_NAME[activeForm];

  function handleChange(nextFormStep) {
    const { NAME, ROUTE } = FORM_BY_STEP[nextFormStep];
    setNextForm(NAME);
    history.push(ROUTE);
  }

  return (
    <div style={{ marginTop: '3em' }}>
      {hasAssociationForm && (
        <Steps onChange={handleChange} current={STEP}>
          {steps}
        </Steps>
      )}
      <h1 style={{ textAlign: 'center', marginTop: '1em' }}>
        {getMsg(messages[ID])}
      </h1>
    </div>
  );
}

Header.propTypes = {
  hasAssociationForm: PropTypes.bool,
  history: PropTypes.object,
};

Header.defaultProps = {
  hasAssociationForm: false,
};

export default withRouter(Header);
