import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { APP_ROUTES } from 'common/constants';
import TextDirectionProvider from 'common/hooks/text-direction/provider/text-direction-provider';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import { textDirectionSelector } from 'redux/selectors';

import { AssociationForm, EntityForm } from '../Forms';
import AdminRoute from '../Admin/Route';
import AdminDashboard from '../Admin/Dashboard';
import GlobalStyle from '../../global-styles';

import 'antd/dist/antd.css';
import './app.css';

const {
  NOT_FOUND,
  HOME,
  ENTITY_FORM,
  ASSOCIATION_FORM,
  ADMIN_DASHBOARD,
} = APP_ROUTES;

const AppWrapper = styled.div`
  max-width: calc(1000px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background-color: #fafafa;
`;

function App() {
  const textDirection = useSelector(textDirectionSelector);
  return (
    <AppWrapper>
      <TextDirectionProvider value={textDirection}>
        <Header />
        <Switch>
          <Route exact path={HOME} component={HomePage} />
          <Route path={ENTITY_FORM} component={EntityForm} />
          <Route path={ASSOCIATION_FORM} component={AssociationForm} />
          <AdminRoute path={ADMIN_DASHBOARD} component={AdminDashboard} />
          <Route path={NOT_FOUND} component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </TextDirectionProvider>
    </AppWrapper>
  );
}

export default App;
