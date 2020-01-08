import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { useLocalStorage } from 'use-hooks';

import { locationPathnameSelector } from 'common/selectors';
import { APP_ROUTES } from 'common/constants';
import Login from 'containers/Login/Login';

import { areLoginDetailsValid, invalidFormDetails } from './utils';

const { LOGIN, HOME } = APP_ROUTES;

function AuthenticationProvider({ children, history }) {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  const pathName = useSelector(locationPathnameSelector);

  useEffect(() => {
    if (!isLoggedIn) history.push(LOGIN);
  }, [pathName]);

  function handleSubmit(form, data) {
    if (areLoginDetailsValid(data)) {
      setIsLoggedIn(true);
      history.push(HOME);
    } else {
      form.setFields({ ...invalidFormDetails(data) });
    }
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
