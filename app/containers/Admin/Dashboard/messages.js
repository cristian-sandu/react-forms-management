import { defineMessages } from 'react-intl';
import { TABS } from './constants';

const context = 'containers.Admin.Dashboard';

export default defineMessages({
  REGISTRATION: {
    id: `${context}.REGISTRATION`,
    defaultMessage: TABS.REGISTRATION.NAME,
  },
  ENTITY_BY_NAME: {
    id: `${context}.ENTITY_BY_NAME`,
    defaultMessage: TABS.ENTITY_BY_NAME.NAME,
  },
  ENTITY_BY_ID: {
    id: `${context}.ENTITY_BY_ID`,
    defaultMessage: TABS.ENTITY_BY_ID.NAME,
  },
  ASSOCIATION_BY_NAME: {
    id: `${context}.ASSOCIATION_BY_NAME`,
    defaultMessage: TABS.ASSOCIATION_BY_NAME.NAME,
  },
  ENTITIES: {
    id: `${context}.ENTITIES`,
    defaultMessage: TABS.ENTITIES.NAME,
  },
  ASSOCIATIONS: {
    id: `${context}.ASSOCIATIONS`,
    defaultMessage: TABS.ASSOCIATIONS.NAME,
  },
});
