import { ENTITY_FORM_FIELDS_CONFIG } from '../../../../HomePage/components/EntityForm/constants';

const base64image =
  'data:image/jpeg;base64,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skZP4C1+wX/BJz4S+IZvGniP41X1rJBodtpr6JYTupVbu6nljkmMZI+ZYUiCsRxufHUHHXVjHkPNw05uotT91qKKK4T1gooooAKKKKACiiigD//S/fyiiigAooooAKKKKACvDvEv7NfwK8Z+PpPid4v8GabrfiOSGCBrrUEa5QpbgiP9xIzQblBxu2ZwBzxXuNFNNrYTSe5Q03StL0a0TT9Hs7extYhhILaJYYlHoEQBR+Aq/RRSGFFFFAHzp8VP2Tf2fvjT4lh8YfEfwlBqesQxJC10lxcWrzRR/cSb7PLGJQvQb8kDjOOK9S8BfDP4ffC7SBoPw88Paf4eseC0VhbpD5hHRpGA3SN/tOSfeu5op8ztYlRSd0gooopFFS/sLLVbG40zUoI7q0u4nguIJlDxyxSKVdHU5DKykgg8EGvlPw7+wp+yh4Y1o69p3w90+W5Enmxpey3F7bxtnPyW9xLJCAOw2HHavreimpNbEuMXuiC1tbaxtorOyhjt4IVCRxRKEREUYCqqgAADoBxU9FFIoKgurW1vraWyvYY7i3uEaKWGVQ8ckbjDKysCGVgcEHgip6KAPk6X9hj9kybWG1x/htpX2hpPNMavcLbbs5/49hKIMf7Ozb7V9Q6TpOlaDptvo2h2cGn2FnGIre1tYlhhhjXoqIgCqo9AAK0KKbk3uyVFLZBRRRSKCiiigAooooAKKKKAP//T/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=';

export default {
  [ENTITY_FORM_FIELDS_CONFIG.ENTITY_NAME.ID]: 'Entity one',
  [ENTITY_FORM_FIELDS_CONFIG.TRADE_MARK.ID]: base64image,
  [ENTITY_FORM_FIELDS_CONFIG.SPECIALIZATION.ID]: 'Programmer',
  [ENTITY_FORM_FIELDS_CONFIG.PERSON_IN_CHARGE.ID]: 'John',
  [ENTITY_FORM_FIELDS_CONFIG.GENDER.ID]: 'Male',
  [ENTITY_FORM_FIELDS_CONFIG.NATIONAL_ID_NUMBER.ID]: '120302302156',
  [ENTITY_FORM_FIELDS_CONFIG.OFFICE_TEL_NUMBER.ID]: '0602321035',
  [ENTITY_FORM_FIELDS_CONFIG.EMAIL_ADDRESS.ID]: 'johny@gmail.com',
  [ENTITY_FORM_FIELDS_CONFIG.SOCIAL_MEDIA.ID]: 'https://facebook.com/john',
  [ENTITY_FORM_FIELDS_CONFIG.ADDRESS.ID]: 'st. Marry at Hill',
  [ENTITY_FORM_FIELDS_CONFIG.CITY.ID]: 'London',
  [ENTITY_FORM_FIELDS_CONFIG.PROVINCE.ID]: 'London Hill',
  [ENTITY_FORM_FIELDS_CONFIG.NUMBER_OF_NATIONAL_EMPLOYEES.ID]: '123143432',
  [ENTITY_FORM_FIELDS_CONFIG.NUMBER_OF__NON_NATIONAL_EMPLOYEES.ID]:
    '0002124343',
  [ENTITY_FORM_FIELDS_CONFIG.STATUS.ID]: 'Single',
  [ENTITY_FORM_FIELDS_CONFIG.VALUE_OF_FUNDING.ID]: 'Value Of Funding',
  [ENTITY_FORM_FIELDS_CONFIG.NAME_OF_ASSOCIATION.ID]: 'Association one',
  [ENTITY_FORM_FIELDS_CONFIG.PROFILE.ID]: 'Profile test',
  [ENTITY_FORM_FIELDS_CONFIG.COMMERCIAL_REGISTRATION.ID]: base64image,
  [ENTITY_FORM_FIELDS_CONFIG.ISIC_CLASSIFICATION_NUMBER.ID]: '143445555',
};
