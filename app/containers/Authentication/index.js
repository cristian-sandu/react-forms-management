import axios from 'axios';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, withRouter } from 'react-router-dom';
import { useLocalStorage } from 'use-hooks';

import { API_ENDPOINTS, APP_ROUTES } from 'common/constants';
import Login from 'containers/Login/Login';

import { areLoginDetailsValid, invalidFormDetails } from './utils';

const { LOGIN, HOME } = APP_ROUTES;

function AuthenticationProvider({ children, history }) {
  const [isLoggedIn, setLogged] = useLocalStorage('isLoggedIn', false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === LOGIN) setLogged(false);
    if (!isLoggedIn) history.push(LOGIN);
  }, [isLoggedIn, pathname]);

  // eslint-disable-next-line consistent-return
  function handleSubmit(form, userDetails) {
    axios
      .post(API_ENDPOINTS.POST.LOGIN, userDetails)
      .then(result => console.log('Successful login response!', result))
      .catch(error => console.error('Login error', error));

    // these should be reviewed once back-end sends a real response to the /login post
    if (!areLoginDetailsValid(userDetails)) {
      return form.setFields(invalidFormDetails(userDetails));
    }
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
