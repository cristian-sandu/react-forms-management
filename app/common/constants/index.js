const { freeze } = Object;

// @TODO this should be changed with a real API address
export const BASE_API_ENDPOINT = 'localhost:5000';

export const API_ENDPOINTS = {
  GET: {
    ENTITIES: `${BASE_API_ENDPOINT}/entities`,
    ASSOCIATIONS: `${BASE_API_ENDPOINT}/associations`,
    ENTITY_BY_NAME: `${BASE_API_ENDPOINT}/entity_by_name`,
    ENTITY_BY_ID: `${BASE_API_ENDPOINT}/entity_by_id`,
    ASSOCIATION_BY_NAME: `${BASE_API_ENDPOINT}/association_by_name`,
  },
  POST: {
    LOGIN: `${BASE_API_ENDPOINT}/login`,
    REGISTRATION: `${BASE_API_ENDPOINT}/registration`,
    ENTITY: `${BASE_API_ENDPOINT}/entity`,
    ASSOCIATION: `${BASE_API_ENDPOINT}/association`,
  },
};

export const EMPTY_ARRAY = freeze([]);
export const EMPTY_OBJECT = freeze({});
export const EMPTY_STRING = '';

export const APP_ROUTES = {
  LOGIN: '/login',
  HOME: '/',
  ASSOCIATION_FORM: '/association-form',
  ENTITY_FORM: '/entity-form',
  NOT_FOUND: '*',
};

export const TEXT_DIRECTION = {
  LEFT_TO_RIGHT: 'ltr',
  RIGHT_TO_LEFT: 'rtl',
};
