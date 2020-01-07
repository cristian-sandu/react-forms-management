import { DatePicker } from 'antd';
import { FormField } from 'common/form/components';
import { TEXT_ALIGN } from 'common/form/constants';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import React, { memo } from 'react';

// eslint-disable-next-line max-lines-per-function
const DatePickerField = ({
  allowClear,
  datePickerStyle,
  disabled,
  disabledDate,
  format,
  id,
  initialValue,
  label,
  labelAlign,
  placeholder,
  required,
  requiredMessage,
}) => (
  <FormField
    disabled={disabled}
    id={id}
    initialValue={initialValue}
    label={label}
    labelAlign={labelAlign}
    required={required}
    requiredMessage={requiredMessage}
  >
    <DatePicker
      allowClear={allowClear}
      disabled={disabled}
      disabledDate={disabledDate}
      format={format}
      placeholder={placeholder}
      style={datePickerStyle}
    />
  </FormField>
);

DatePickerField.defaultProps = {
  allowClear: false,
  datePickerStyle: { width: 500 },
  disabled: false,
  format: 'DD/MM/YYYY',
  required: true,
};

DatePickerField.propTypes = {
  allowClear: PropTypes.bool,
  datePickerStyle: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
  disabledDate: PropTypes.func,
  format: PropTypes.string,
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.instanceOf(Object),
  label: PropTypes.any.isRequired,
  labelAlign: PropTypes.oneOf(values(TEXT_ALIGN)),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.any,
};

export default memo(DatePickerField);
