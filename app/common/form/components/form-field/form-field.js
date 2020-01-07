import { Form } from 'antd';
import classNames from 'classnames';
import { EMPTY_ARRAY, EMPTY_STRING } from 'common/constants';
import {
  FORM_FIELD_LAYOUT_CONFIG,
  FORM_LAYOUT,
  TEXT_ALIGN,
} from 'common/form/constants';
import useFormContext from 'common/form/consumer/form-consumer';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import React, { useMemo } from 'react';

const { Item: FormItem } = Form;
const { HORIZONTAL } = FORM_LAYOUT;

// eslint-disable-next-line max-lines-per-function
const FormField = ({
  children,
  className,
  disabled,
  id,
  initialValue,
  label,
  labelAlign,
  layout,
  required,
  requiredMessage,
  rules,
  style,
}) => {
  const { getFieldDecorator } = useFormContext();

  const decorateField = getFieldDecorator(id, {
    initialValue,
    rules: [
      { required: required && !disabled, message: requiredMessage },
      ...rules,
    ],
  });

  const formFieldLayout = useMemo(
    () =>
      layout === HORIZONTAL
        ? FORM_FIELD_LAYOUT_CONFIG.HORIZONTAL
        : FORM_FIELD_LAYOUT_CONFIG.VERTICAL,
    [layout],
  );

  return (
    <div
      className={classNames(['o-container o-padding-bottom-5', className])}
      style={style}
    >
      <FormItem label={label} labelAlign={labelAlign} {...formFieldLayout}>
        {decorateField(children)}
      </FormItem>
    </div>
  );
};

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.any,
  label: PropTypes.any,
  labelAlign: PropTypes.oneOf(values(TEXT_ALIGN)),
  layout: PropTypes.oneOf(values(FORM_LAYOUT)),
  required: PropTypes.bool,
  requiredMessage: PropTypes.any,
  rules: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.instanceOf(Object),
};

FormField.defaultProps = {
  disabled: false,
  layout: FORM_LAYOUT.VERTICAL,
  required: true,
  requiredMessage: EMPTY_STRING,
  rules: EMPTY_ARRAY,
};

export default FormField;
