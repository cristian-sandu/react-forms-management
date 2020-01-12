import React from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

import { TABS } from './constants';
import Registration from './components/Registration';
import AssociationByName from './components/AssociationByName';
import Associations from './components/Associations';
import Entities from './components/Entities';
import EntityById from './components/EntityById';

const { TabPane } = Tabs;

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
      style={{ height: '85vh' }}
      defaultActiveKey="1"
      renderTabBar={renderTabBar}
    >
      <TabPane
        tab={TABS.REGISTRATION.NAME}
        key={TABS.REGISTRATION.NAME}
        style={{ height: 200 }}
      >
        <Registration />
      </TabPane>
      <TabPane tab={TABS.ENTITIES.NAME} key={TABS.ENTITIES.NAME}>
        <Entities />
      </TabPane>
      <TabPane tab={TABS.ENTITY_BY_ID.NAME} key={TABS.ENTITY_BY_ID.NAME}>
        <EntityById />
      </TabPane>
      <TabPane tab={TABS.ASSOCIATIONS.NAME} key={TABS.ASSOCIATIONS.NAME}>
        <Associations />
      </TabPane>
      <TabPane
        tab={TABS.ASSOCIATION_BY_NAME.NAME}
        key={TABS.ASSOCIATION_BY_NAME.NAME}
      >
        <AssociationByName />
      </TabPane>
    </Tabs>
  </StickyContainer>
);

export default AdminDashboard;
