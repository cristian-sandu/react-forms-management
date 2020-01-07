import { call, identity, pipe, prop } from 'ramda';
import { createSelector } from 'reselect';
import {
  createDeepEqualSelector,
  pickValueFromProps,
} from 'utils/selector-utils';

const getFormFromProps = pickValueFromProps('form');
const getFieldsValue = createSelector(
  getFormFromProps,
  pipe(
    prop('getFieldsValue'),
    call,
  ),
);
export const getFormFieldsValue = createDeepEqualSelector(
  getFieldsValue,
  identity,
);
