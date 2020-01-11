import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { APP_ROUTES } from 'common/constants';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import { AssociationForm, EntityForm } from '../HomePage/components';
import GlobalStyle from '../../global-styles';

import 'antd/dist/antd.css';
import './app.css';

const { NOT_FOUND, HOME, ENTITY_FORM, ASSOCIATION_FORM } = APP_ROUTES;

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  height: 100vh;
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
        <Route path={ENTITY_FORM} component={EntityForm} />
        <Route path={ASSOCIATION_FORM} component={AssociationForm} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
