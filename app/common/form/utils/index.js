import { Select } from 'antd';
import { keys, map, pipe } from 'ramda';
import React from 'react';

const { Option: SelectOption } = Select;

export const convertArrayToSelectOptions = map(({ text, value }) => (
  <SelectOption key={value} value={value}>
    {text}
  </SelectOption>
));

export const convertObjectToDataSource = objectSource =>
  pipe(
    keys,
    map(key => ({
      value: key,
      text: objectSource[key],
    })),
  )(objectSource);

export const convertObjectToSelectOptions = pipe(
  convertObjectToDataSource,
  convertArrayToSelectOptions,
);
