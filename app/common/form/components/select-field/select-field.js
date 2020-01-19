import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { values } from 'ramda';
import { Select } from 'antd';

import { EMPTY_STRING, TEXT_DIRECTION } from 'common/constants';
import { FormField } from 'common/form/components';
import { TEXT_ALIGN } from 'common/form/constants';
import { objectToSelectOption } from 'common/form/utils';
import { insensitiveFilterOption } from 'common/form/utils/filter-utils';
import { useTextDirection } from 'common/hooks';

import './styles.css';

const { RIGHT_TO_LEFT } = TEXT_DIRECTION;

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
}) => {
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;

  const selectOptions = useMemo(
    () => objectToSelectOption(options, isRTLDirection),
    [options, isRTLDirection],
  );

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
        className={classNames('select-field', {
          'rtl__input-direction': isRTLDirection,
        })}
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
  filterOption: insensitiveFilterOption,
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
