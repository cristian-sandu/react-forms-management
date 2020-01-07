import { equals, flip, pipe, prop } from 'ramda';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export const createDeepEqualSelector = createSelectorCreator(defaultMemoize, equals);
​
export const pickValueFromProps = pipe(prop, flip);
