import { createSelector } from 'reselect';
import { identity, prop } from 'ramda';

import { REDUCER_KEYS } from 'common/constants/reducer-keys';

export const entitiesSelector = createSelector(
  prop(REDUCER_KEYS.ENTITIES),
  identity,
);
