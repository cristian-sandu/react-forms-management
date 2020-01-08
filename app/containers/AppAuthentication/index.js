import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { useLocalStorage } from 'use-hooks';

import { locationPathnameSelector } from 'common/selectors';
import { APP_ROUTES } from 'common/constants';
import Login from 'containers/Login/Login';

const { LOGIN, HOME } = APP_ROUTES;

function AppAuthentication({ children, history }) {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  const pathName = useSelector(locationPathnameSelector);

  useEffect(() => {
    if (!isLoggedIn) history.push(LOGIN);
  }, [pathName]);

  function handleSubmit() {
    setIsLoggedIn(true);
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

export default withRouter(AppAuthentication);
