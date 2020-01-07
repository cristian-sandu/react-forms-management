const ASSOCIATION_FORM_PREFIX = 'AssociationForm';

export const ASSOCIATION_FORM_FIELDS_CONFIG = {
  ASSOCIATION_NAME: {
    ID: `${ASSOCIATION_FORM_PREFIX}.AssociationName`,
    LABEL: 'Association Name',
    REQUIRED_MESSAGE: 'Association Name is required',
  },
  PERSON_IN_CHARGE: {
    ID: `${ASSOCIATION_FORM_PREFIX}.PersonInCharge`,
    LABEL: 'Person in charge',
    REQUIRED_MESSAGE: 'Person in charge is required',
  },
  MOBILE_NUMBER: {
    ID: `${ASSOCIATION_FORM_PREFIX}.MobileNumber`,
    LABEL: 'Mobile Number',
    REQUIRED_MESSAGE: 'Mobile Number is required',
  },
  ADDRESS: {
    ID: `${ASSOCIATION_FORM_PREFIX}.Address`,
    LABEL: 'Address',
    REQUIRED_MESSAGE: 'Address is required',
  },
  CITY: {
    ID: `${ASSOCIATION_FORM_PREFIX}.City`,
    LABEL: 'City',
    REQUIRED_MESSAGE: 'City is required',
  },
  PROVINCE: {
    ID: `${ASSOCIATION_FORM_PREFIX}.Province`,
    LABEL: 'Province',
    REQUIRED_MESSAGE: 'Province is required',
  },
  EMAIL: {
    ID: `${ASSOCIATION_FORM_PREFIX}.Email`,
    LABEL: 'Email',
    REQUIRED_MESSAGE: 'Email is required',
  },
  WEBSITE: {
    ID: `${ASSOCIATION_FORM_PREFIX}.WebSite`,
    LABEL: 'Website',
    REQUIRED_MESSAGE: 'Website is required',
  },
};
