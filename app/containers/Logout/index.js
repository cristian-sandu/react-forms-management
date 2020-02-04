import axios from 'axios';
import React from 'react';
import { Button } from 'antd';
import { useLocalStorage } from 'use-hooks';
import { useHistory } from 'react-router-dom';

import { API_ENDPOINTS, APP_ROUTES } from '../../common/constants';
const { LOGOUT } = API_ENDPOINTS.POST;

const Logout = () => {
  const history = useHistory();
  const [_, setLogged] = useLocalStorage('isLoggedIn', true);

  function handleLogout() {
    axios
      .post(LOGOUT)
      .then(result => console.log('Successful logout', result))
      .catch(error => console.error('Logout error', error));

    // these should be reviewed once back-end sends a real response to the /logout post
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
