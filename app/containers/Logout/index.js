import React from 'react';
import { Button } from 'antd';
import { useLocalStorage } from 'use-hooks';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { APP_ROUTES } from '../../common/constants';
import { logout } from '../../redux/actions/auth-actions';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [_, setLogged] = useLocalStorage('isLoggedIn', true);

  function handleLogout() {
    setLogged(undefined);
    dispatch(logout());
    history.push(APP_ROUTES.LOGIN);
  }

  return (
    <Button size="small" type="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
