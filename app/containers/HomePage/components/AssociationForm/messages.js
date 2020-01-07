import { defineMessages } from 'react-intl';
import { ASSOCIATION_FORM_FIELDS_CONFIG as FIELDS } from './constants';

export const scope = 'boilerplate.containers.HomePage.AssociationForm';

export default defineMessages({
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
  PERSON_IN_CHARGE: {
    LABEL: {
      id: `${scope}.PERSON_IN_CHARGE.LABEL`,
      defaultMessage: FIELDS.PERSON_IN_CHARGE.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.PERSON_IN_CHARGE.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.PERSON_IN_CHARGE.REQUIRED_MESSAGE,
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
  ADDRESS: {
    LABEL: {
      id: `${scope}.ADDRESS.LABEL`,
      defaultMessage: FIELDS.ADDRESS.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.ADDRESS.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.ADDRESS.REQUIRED_MESSAGE,
    },
  },
  CITY: {
    LABEL: {
      id: `${scope}.CITY.LABEL`,
      defaultMessage: FIELDS.CITY.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.CITY.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.CITY.REQUIRED_MESSAGE,
    },
  },
  PROVINCE: {
    LABEL: {
      id: `${scope}.PROVINCE.LABEL`,
      defaultMessage: FIELDS.PROVINCE.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.PROVINCE.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.PROVINCE.REQUIRED_MESSAGE,
    },
  },
  EMAIL: {
    LABEL: {
      id: `${scope}.EMAIL.LABEL`,
      defaultMessage: FIELDS.EMAIL.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.EMAIL.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.EMAIL.REQUIRED_MESSAGE,
    },
  },
  WEBSITE: {
    LABEL: {
      id: `${scope}.WEBSITE.LABEL`,
      defaultMessage: FIELDS.WEBSITE.LABEL,
    },
    REQUIRED_MESSAGE: {
      id: `${scope}.WEBSITE.REQUIRED_MESSAGE`,
      defaultMessage: FIELDS.WEBSITE.REQUIRED_MESSAGE,
    },
  },
});
