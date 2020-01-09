import React from 'react';
import PropTypes from 'prop-types';

import {
  InputField,
  InputNumberField,
  SelectField,
} from 'common/form/components';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import messages from './messages';
import { ASSOCIATION_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import { CITIES_OPTIONS, PROVINCE_OPTIONS } from '../../utils/select-options';
import { useTextDirection } from '../../../../common/hooks';
import { TEXT_DIRECTION } from '../../../../common/constants';

const { RIGHT_TO_LEFT } = TEXT_DIRECTION;

const AssociationForm = ({ isVisible }) => {
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;

  return (
    <div style={{ display: !isVisible && 'none' }}>
      <InputField
        id={FIELDS.ASSOCIATION_NAME.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.ASSOCIATION_NAME.LABEL)}
        requiredMessage={getMsg(messages.ASSOCIATION_NAME.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.PERSON_IN_CHARGE.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.PERSON_IN_CHARGE.LABEL)}
        requiredMessage={getMsg(messages.PERSON_IN_CHARGE.REQUIRED_MESSAGE)}
      />
      <InputNumberField
        id={FIELDS.MOBILE_NUMBER.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.MOBILE_NUMBER.LABEL)}
        requiredMessage={getMsg(messages.MOBILE_NUMBER.REQUIRED_MESSAGE)}
      />
      <InputField
        id={FIELDS.ADDRESS.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.ADDRESS.LABEL)}
        requiredMessage={getMsg(messages.ADDRESS.REQUIRED_MESSAGE)}
      />
      <SelectField
        id={FIELDS.CITY.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.CITY.LABEL)}
        requiredMessage={getMsg(messages.CITY.REQUIRED_MESSAGE)}
        options={CITIES_OPTIONS}
      />
      <SelectField
        id={FIELDS.PROVINCE.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.PROVINCE.LABEL)}
        requiredMessage={getMsg(messages.PROVINCE.REQUIRED_MESSAGE)}
        options={PROVINCE_OPTIONS}
      />
      <InputField
        id={FIELDS.EMAIL.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.EMAIL.LABEL)}
        requiredMessage={getMsg(messages.EMAIL.REQUIRED_MESSAGE)}
        rules={[
          {
            type: 'email',
            message: getMsg(messages.EMAIL.EMAIL_INVALID_MESSAGE),
          },
        ]}
        type="email"
      />
      <InputField
        id={FIELDS.WEBSITE.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.WEBSITE.LABEL)}
        requiredMessage={getMsg(messages.WEBSITE.REQUIRED_MESSAGE)}
        rules={[
          {
            type: 'url',
            message: getMsg(messages.WEBSITE.WEBSITE_INVALID_MESSAGE),
          },
        ]}
      />
    </div>
  );
};

AssociationForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default AssociationForm;
