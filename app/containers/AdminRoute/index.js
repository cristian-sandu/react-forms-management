import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserAdminSelector } from 'redux/selectors';
import { APP_ROUTES } from 'common/constants';

const { HOME } = APP_ROUTES;

const AdminRoute = props => {
  const isAdmin = useSelector(isUserAdminSelector);
  return isAdmin ? <Route {...props} /> : <Redirect to={HOME} />;
};

export default AdminRoute;
