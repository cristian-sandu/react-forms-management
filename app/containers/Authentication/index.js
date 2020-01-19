import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { useLocalStorage } from 'use-hooks';

import { APP_ROUTES } from 'common/constants';
import Login from 'containers/Login/Login';

import { areLoginDetailsValid, invalidFormDetails } from './utils';

const { LOGIN, HOME } = APP_ROUTES;

function AuthenticationProvider({ children, history }) {
  const [isLoggedIn, setLogged] = useLocalStorage('isLoggedIn', false);

  useEffect(() => {
    if (!isLoggedIn) history.push(LOGIN);
  }, [isLoggedIn]);

  // eslint-disable-next-line consistent-return
  function handleSubmit(form, userDetails) {
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

export default withRouter(AuthenticationProvider);
