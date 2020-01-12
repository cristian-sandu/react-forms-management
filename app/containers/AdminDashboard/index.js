import React from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

import { TABS } from './constants';

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
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      <TabPane
        tab={TABS.REGISTRATION.NAME}
        key={TABS.REGISTRATION.NAME}
        style={{ height: 200 }}
      >
        REGISTRATION
      </TabPane>
      <TabPane tab={TABS.ENTITIES.NAME} key={TABS.ENTITIES.NAME}>
        ENTITIES
      </TabPane>
      <TabPane tab={TABS.ENTITY_BY_ID.NAME} key={TABS.ENTITY_BY_ID.NAME}>
        ENTITY_BY_ID
      </TabPane>
      <TabPane tab={TABS.ASSOCIATIONS.NAME} key={TABS.ASSOCIATIONS.NAME}>
        ASSOCIATIONS
      </TabPane>
      <TabPane
        tab={TABS.ASSOCIATION_BY_NAME.NAME}
        key={TABS.ASSOCIATION_BY_NAME.NAME}
      >
        ASSOCIATION_BY_NAME
      </TabPane>
    </Tabs>
  </StickyContainer>
);

export default AdminDashboard;
