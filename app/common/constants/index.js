const { freeze } = Object;

export const EMPTY_ARRAY = freeze([]);
export const EMPTY_OBJECT = freeze({});
export const EMPTY_STRING = '';

export const APP_ROUTES = {
  LOGIN: '/login',
  HOME: '/',
  NOT_FOUND: '*',
};

export const TEXT_DIRECTION = {
  LEFT_TO_RIGHT: 'ltr',
  RIGHT_TO_LEFT: 'rtl',
};
