import { createSelector } from 'reselect';
import { identity, prop } from 'ramda';

import { REDUCER_KEYS } from 'common/constants/reducer-keys';

export const associationsSelector = createSelector(
  prop(REDUCER_KEYS.ASSOCIATIONS),
  identity,
);
