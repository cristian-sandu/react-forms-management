import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import { withRouter } from 'react-router-dom';

import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import messages from './messages';
import {
  ELEMENTS,
  ELEMENTS_BY_NAME,
  ELEMENTS_BY_PATH,
  ELEMENTS_BY_STEP,
} from './constants';
import LocaleToggle from '../../containers/LocaleToggle';

const { Step } = Steps;

const customDot = dot => <span>{dot}</span>;

const BASIC_STEPS = [
  <Step title={getMsg(messages.HOME)} key="Home" />,
  <Step title={getMsg(messages.ENTITY_FORM)} key="Entity_Form" />,
];

const ALL_STEPS = [
  ...BASIC_STEPS,
  <Step title={getMsg(messages.ASSOCIATION_FORM)} key="Association_Form" />,
];

function Header({ hasAssociationForm, history, location: { pathname } }) {
  const [activeStepName, setNextStep] = useState(ELEMENTS.HOME.NAME);
  const { STEP, ID } = ELEMENTS_BY_NAME[activeStepName];

  useEffect(() => {
    const activeElementPath = ELEMENTS_BY_NAME[activeStepName].ROUTE;
    if (activeElementPath !== pathname) {
      setNextStep(ELEMENTS_BY_PATH[pathname].NAME);
    }
  }, [pathname]);

  function handleChange(nextElementStep) {
    const { NAME, ROUTE } = ELEMENTS_BY_STEP[nextElementStep];
    setNextStep(NAME);
    history.push(ROUTE);
  }

  return (
    <div>
      <div style={{ marginTop: '1em' }}>
        <LocaleToggle />
      </div>
      <div style={{ marginTop: '3em' }}>
        <Steps onChange={handleChange} current={STEP} progressDot={customDot}>
          {hasAssociationForm ? ALL_STEPS : BASIC_STEPS}
        </Steps>
        <h1 style={{ textAlign: 'center', marginTop: '1em' }}>
          {getMsg(messages[ID])}
        </h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  hasAssociationForm: PropTypes.bool,
  history: PropTypes.object,
  location: PropTypes.object,
};

Header.defaultProps = {
  hasAssociationForm: true,
};

export default withRouter(Header);
