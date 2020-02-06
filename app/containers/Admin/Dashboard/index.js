import React from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

import { getFormattedMessage } from 'utils/formatted-message';

import { TABS } from './constants';
import Registration from './components/Registration';
import AssociationByName from './components/AssociationByName';
import Associations from './components/Associations';
import Entities from './components/Entities';
import EntityById from './components/EntityById';
import EntityByName from './components/EntityByName';
import messages from './messages';

const { TabPane } = Tabs;
const TabPaneStyle = { padding: 10, paddingBottom: 20 };

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        style={{ ...style, zIndex: 1, background: '#fff' }}
      />
    )}
  </Sticky>
);

const AdminDashboard = () => (
  <StickyContainer>
    <Tabs
      style={{ height: '100%' }}
      defaultActiveKey="1"
      renderTabBar={renderTabBar}
      destroyInactiveTabPane
    >
      <TabPane
        tab={getFormattedMessage(messages.REGISTRATION)}
        key={TABS.REGISTRATION.NAME}
      >
        <Registration />
      </TabPane>
      <TabPane
        tab={getFormattedMessage(messages.ENTITIES)}
        key={TABS.ENTITIES.NAME}
        style={TabPaneStyle}
      >
        <Entities />
      </TabPane>
      <TabPane
        tab={getFormattedMessage(messages.ENTITY_BY_ID)}
        key={TABS.ENTITY_BY_ID.NAME}
        style={TabPaneStyle}
      >
        <EntityById />
      </TabPane>
      <TabPane
        tab={getFormattedMessage(messages.ENTITY_BY_NAME)}
        key={TABS.ENTITY_BY_NAME.NAME}
        style={TabPaneStyle}
      >
        <EntityByName />
      </TabPane>
      <TabPane
        tab={getFormattedMessage(messages.ASSOCIATIONS)}
        key={TABS.ASSOCIATIONS.NAME}
        style={TabPaneStyle}
      >
        <Associations />
      </TabPane>
      <TabPane
        tab={getFormattedMessage(messages.ASSOCIATION_BY_NAME)}
        key={TABS.ASSOCIATION_BY_NAME.NAME}
        style={TabPaneStyle}
      >
        <AssociationByName />
      </TabPane>
    </Tabs>
  </StickyContainer>
);

export default AdminDashboard;
