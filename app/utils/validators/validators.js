import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import messages from './messages';

export const NUMBER_20_DIGITS_VALIDATION_RULES = [
  {
    validator: (_, value, cb) =>
      String(value).length > 20
        ? cb(getMsg(messages.NUMBER_20_CHARS_VALIDATOR))
        : cb(),
  },
];

export const STRING_70_CHARS_VALIDATION_RULES = [
  {
    max: 70,
    message: getMsg(messages.STRING_70_CHARS_VALIDATOR),
  },
];
