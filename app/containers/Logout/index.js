import React from 'react';
import { Button } from 'antd';
import { useLocalStorage } from 'use-hooks';
import { useHistory } from 'react-router-dom';

import { APP_ROUTES } from '../../common/constants';

const Logout = () => {
  const history = useHistory();
  const [_, setLogged] = useLocalStorage('isLoggedIn', true);

  function handleLogout() {
    setLogged(undefined);
    history.push(APP_ROUTES.LOGIN);
  }

  return (
    <Button size="small" type="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
