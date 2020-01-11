import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  InputField,
  InputNumberField,
  SelectField,
} from 'common/form/components';
import { useTextDirection } from 'common/hooks';
import { TEXT_DIRECTION } from 'common/constants';
import { isArabicLanguageSelector } from 'common/selectors';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import { ASSOCIATION_FORM_FIELDS_CONFIG as FIELDS } from './constants';
import messages from './messages';
import * as SelectOptionsEn from '../../utils/select-options-en';
import * as SelectOptionsAr from '../../utils/select-options-ar';

const { RIGHT_TO_LEFT } = TEXT_DIRECTION;

const AssociationForm = ({ isVisible }) => {
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;
  const isArabicLanguage = useSelector(isArabicLanguageSelector);
  const SelectOptionsSource = isArabicLanguage
    ? SelectOptionsAr
    : SelectOptionsEn;

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
        options={SelectOptionsSource.CITIES_OPTIONS}
      />
      <SelectField
        id={FIELDS.PROVINCE.ID}
        isRTLDirection={isRTLDirection}
        label={getMsg(messages.PROVINCE.LABEL)}
        requiredMessage={getMsg(messages.PROVINCE.REQUIRED_MESSAGE)}
        options={SelectOptionsSource.PROVINCE_OPTIONS}
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
