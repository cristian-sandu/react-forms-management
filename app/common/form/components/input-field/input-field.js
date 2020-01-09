import { Input } from 'antd';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import React, { memo } from 'react';
import classNames from 'classnames';

import { FormField } from 'common/form/components';
import { TEXT_ALIGN } from 'common/form/constants';
import { STRING_70_CHARS_VALIDATION_RULES } from 'utils/validators/validators';

const InputField = ({
  disabled,
  id,
  initialValue,
  label,
  labelAlign,
  placeholder,
  required,
  requiredMessage,
  inputStyle,
  rules,
  isRTLDirection,
  ...rest
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
      autoComplete="off"
      className={classNames({ 'rtl__input-direction': isRTLDirection })}
      disabled={disabled}
      placeholder={placeholder}
      style={inputStyle}
      {...rest}
    />
  </FormField>
);

InputField.defaultProps = {
  disabled: false,
  inputStyle: { width: '100%' },
  required: true,
  rules: STRING_70_CHARS_VALIDATION_RULES,
};

InputField.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  inputStyle: PropTypes.instanceOf(Object),
  label: PropTypes.any.isRequired,
  labelAlign: PropTypes.oneOf(values(TEXT_ALIGN)),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.any,
  rules: PropTypes.arrayOf(PropTypes.object),
};

export default memo(InputField);
