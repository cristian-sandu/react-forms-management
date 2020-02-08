import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from 'use-hooks';

import { APP_ROUTES } from 'common/constants';
import Login from 'containers/Login/Login';
import { setUserRole, login } from 'redux/actions/auth-actions';

import { getUserRole, invalidFormDetails } from './utils';

const { LOGIN, HOME } = APP_ROUTES;

function AuthenticationProvider({ children, history }) {
  const [isLoggedIn, setLogged] = useLocalStorage('isLoggedIn', false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === LOGIN) setLogged(false);
    if (!isLoggedIn) history.push(LOGIN);
  }, [isLoggedIn, pathname]);

  // eslint-disable-next-line consistent-return
  function handleSubmit(form, userDetails) {
    const userRole = getUserRole(userDetails);

    if (!userRole) {
      return form.setFields(invalidFormDetails(userDetails));
    }

    dispatch(login(userDetails));
    dispatch(setUserRole(userRole));
    setLogged(true);

    history.push(HOME);
  }

  return isLoggedIn ? (
    children
  ) : (
    <Route
      exact
      path={LOGIN}
      render={props => <Login onSubmit={handleSubmit} {...props} />}
    />
  );
}

AuthenticationProvider.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object,
};

export default withRouter(AuthenticationProvider);
