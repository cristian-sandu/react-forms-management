import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { APP_ROUTES } from 'common/constants';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import 'antd/dist/antd.css';
import './app.css';

const { NOT_FOUND, HOME } = APP_ROUTES;

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background-color: #fafafa;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route path={NOT_FOUND} component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
