import { Select } from 'antd';
import { keys, map, pipe } from 'ramda';
import React from 'react';
import classNames from 'classnames';

const { Option: SelectOption } = Select;

export const convertArrayToSelectOptions = map(
  ({ text, value, isRTLDirection }) => (
    <SelectOption
      className={classNames({ 'select-option__right-to-left': isRTLDirection })}
      key={value}
      value={value}
    >
      {text}
    </SelectOption>
  ),
);

export const convertObjectToDataSource = (
  objectSource,
  isRTLDirection = false,
) =>
  pipe(
    keys,
    map(key => ({
      value: key,
      text: objectSource[key],
      isRTLDirection,
    })),
  )(objectSource);

export const convertObjectToSelectOptions = pipe(
  convertObjectToDataSource,
  convertArrayToSelectOptions,
);
