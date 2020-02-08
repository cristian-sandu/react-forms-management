import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { USER_ROLES } from 'common/constants';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';
import { userRoleSelector } from 'redux/selectors';

import messages from './messages';
import {
  ELEMENTS,
  ELEMENTS_BY_NAME,
  ELEMENTS_BY_PATH,
  ELEMENTS_BY_STEP,
} from './constants';
import LocaleToggle from '../../containers/LocaleToggle';
import Logout from '../../containers/Logout';

const { Step } = Steps;
const { ADMIN, ASSOCIATION_USER, ENTITY_USER } = USER_ROLES;

const customDot = dot => <span>{dot}</span>;
const HOME_STEP = <Step title={getMsg(messages.HOME)} key="Home" />;

const ENTITY_STEPS = [
  HOME_STEP,
  <Step title={getMsg(messages.ENTITY_FORM)} key="Entity_Form" />,
];

const ASSOCIATION_STEPS = [
  ...ENTITY_STEPS,
  <Step title={getMsg(messages.ASSOCIATION_FORM)} key="Association_Form" />,
];

const ADMIN_STEPS = [
  ...ASSOCIATION_STEPS,
  <Step title={getMsg(messages.ADMIN_DASHBOARD)} key="Admin_Dashboard" />,
];

const getStepsByRole = userRole => {
  switch (userRole) {
    case ADMIN:
      return ADMIN_STEPS;

    case ENTITY_USER:
      return ENTITY_STEPS;

    case ASSOCIATION_USER:
      return ASSOCIATION_STEPS;

    default:
      return null;
  }
};

function Header({ history, location: { pathname } }) {
  const [activeStepName, setNextStep] = useState(ELEMENTS.HOME.NAME);
  const { STEP, ID } = ELEMENTS_BY_NAME[activeStepName];
  const userRole = useSelector(userRoleSelector);

  useEffect(() => {
    const activeElementPath = ELEMENTS_BY_NAME[activeStepName].ROUTE;
    if (activeElementPath !== pathname && ELEMENTS_BY_PATH[pathname]) {
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
      <div
        style={{
          marginTop: '1em',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <LocaleToggle />
        <Logout />
      </div>
      <div style={{ marginTop: '1em' }}>
        <Steps onChange={handleChange} current={STEP} progressDot={customDot}>
          {getStepsByRole(userRole)}
        </Steps>
        <h1 style={{ textAlign: 'center', marginTop: '0.5em' }}>
          {getMsg(messages[ID])}
        </h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(Header);
