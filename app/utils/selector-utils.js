import { createSelectorCreator, defaultMemoize } from 'reselect';
import { equals, flip, pipe, prop } from 'ramda';

export const pickValueFromProps = pipe(
  prop,
  flip,
);

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  equals,
);

export default null;
