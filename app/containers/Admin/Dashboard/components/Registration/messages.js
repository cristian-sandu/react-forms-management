import { defineMessages } from 'react-intl';
import { REGISTRATION_FORM_FIELDS_CONFIG as FIELDS } from './utils';

export const scope = 'containers.Registration';

export default defineMessages({
  USERNAME: {
    LABEL: {
      id: `${scope}.USERNAME.LABEL`,
      defaultMessage: FIELDS.USERNAME.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.USERNAME.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.USERNAME.REQUIRED_MESSAGE,
    },
  },
  PASSWORD: {
    LABEL: {
      id: `${scope}.PASSWORD.LABEL`,
      defaultMessage: FIELDS.PASSWORD.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.PASSWORD.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.PASSWORD.REQUIRED_MESSAGE,
    },
  },
  ENTITY_NAME: {
    LABEL: {
      id: `${scope}.ENTITY_NAME.LABEL`,
      defaultMessage: FIELDS.ENTITY_NAME.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.ENTITY_NAME.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.ENTITY_NAME.REQUIRED_MESSAGE,
    },
  },
  ASSOCIATION_NAME: {
    LABEL: {
      id: `${scope}.ASSOCIATION_NAME.LABEL`,
      defaultMessage: FIELDS.ASSOCIATION_NAME.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.ASSOCIATION_NAME.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.ASSOCIATION_NAME.REQUIRED_MESSAGE,
    },
  },
  CONTACT_PERSON: {
    LABEL: {
      id: `${scope}.CONTACT_PERSON.LABEL`,
      defaultMessage: FIELDS.CONTACT_PERSON.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.CONTACT_PERSON.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.CONTACT_PERSON.REQUIRED_MESSAGE,
    },
  },
  MOBILE_NUMBER: {
    LABEL: {
      id: `${scope}.MOBILE_NUMBER.LABEL`,
      defaultMessage: FIELDS.MOBILE_NUMBER.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.MOBILE_NUMBER.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.MOBILE_NUMBER.REQUIRED_MESSAGE,
    },
  },
});
