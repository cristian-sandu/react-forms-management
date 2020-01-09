import { Input } from 'antd';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import React, { memo } from 'react';
import classNames from 'classnames';

import { FormField } from 'common/form/components';
import { TEXT_ALIGN } from 'common/form/constants';
import { NUMBER_20_DIGITS_VALIDATION_RULES } from 'utils/validators/validators';

// eslint-disable-next-line max-lines-per-function
const InputNumberField = ({
  disabled,
  formatter,
  id,
  initialValue,
  label,
  labelAlign,
  max,
  min,
  onChange,
  parser,
  placeholder,
  precision,
  required,
  requiredMessage,
  inputStyle,
  rules,
  isRTLDirection,
}) => (
  <FormField
    disabled={disabled}
    id={id}
    initialValue={initialValue}
    label={label}
    labelAlign={labelAlign}
    required={required}
    requiredMessage={requiredMessage}
    rules={rules}
  >
    <Input
      className={classNames({ 'rtl__input-direction': isRTLDirection })}
      type="number"
      disabled={disabled}
      formatter={formatter}
      max={max}
      min={min}
      onChange={onChange}
      parser={parser}
      placeholder={placeholder}
      precision={precision}
      style={inputStyle}
    />
  </FormField>
);

InputNumberField.defaultProps = {
  disabled: false,
  inputStyle: { width: '100%' },
  required: true,
  rules: NUMBER_20_DIGITS_VALIDATION_RULES,
};

InputNumberField.propTypes = {
  disabled: PropTypes.bool,
  formatter: PropTypes.func,
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  inputStyle: PropTypes.instanceOf(Object),
  label: PropTypes.any.isRequired,
  labelAlign: PropTypes.oneOf(values(TEXT_ALIGN)),
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  parser: PropTypes.func,
  placeholder: PropTypes.string,
  precision: PropTypes.number,
  required: PropTypes.bool,
  requiredMessage: PropTypes.any,
  rules: PropTypes.arrayOf(PropTypes.object),
};

export default memo(InputNumberField);
