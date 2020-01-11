import { Input, Select } from 'antd';
import { EMPTY_STRING } from 'common/constants';
import { FormField } from 'common/form/components';
import { TEXT_ALIGN } from 'common/form/constants';
import { convertObjectToSelectOptions } from 'common/form/utils';
import { caseInsensitiveSearch } from 'common/form/utils/filter-utils';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import React, { memo, useMemo } from 'react';
import classNames from 'classnames';

// eslint-disable-next-line max-lines-per-function
const SelectField = ({
  disabled,
  filterOption,
  id,
  initialValue,
  label,
  labelAlign,
  notFoundContent,
  options,
  placeholder,
  required,
  requiredMessage,
  selectStyle,
  showSearch,
  isRTLDirection,
}) => {
  const selectOptions = useMemo(() => convertObjectToSelectOptions(options), [
    options,
  ]);
  return (
    <FormField
      disabled={disabled}
      id={id}
      initialValue={initialValue}
      label={label}
      labelAlign={labelAlign}
      required={required}
      requiredMessage={requiredMessage}
    >
      <Select
        className={classNames({ 'rtl__input-direction': isRTLDirection })}
        disabled={disabled}
        filterOption={filterOption}
        notFoundContent={notFoundContent}
        placeholder={placeholder}
        showSearch={showSearch}
        style={selectStyle}
      >
        {selectOptions}
      </Select>
    </FormField>
  );
};

SelectField.defaultProps = {
  disabled: false,
  filterOption: caseInsensitiveSearch,
  isRTLDirection: false,
  notFoundContent: EMPTY_STRING,
  required: true,
  selectStyle: { width: '100%' },
  showSearch: true,
};

SelectField.propTypes = {
  disabled: PropTypes.bool,
  filterOption: PropTypes.func,
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  isRTLDirection: PropTypes.bool,
  label: PropTypes.any.isRequired,
  labelAlign: PropTypes.oneOf(values(TEXT_ALIGN)),
  notFoundContent: PropTypes.string,
  options: PropTypes.instanceOf(Object).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.any,
  selectStyle: PropTypes.instanceOf(Object),
  showSearch: PropTypes.bool,
};

export default memo(SelectField);
