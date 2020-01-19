import React from 'react';
import { Divider, Input } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { associationByNameSelector } from 'redux/selectors';

import AssociationForm from 'containers/Forms/AssociationForm/AssociationForm';
import { TEXT_DIRECTION } from 'common/constants';
import { useTextDirection } from 'common/hooks';
import { useInjectSaga } from 'utils/injectSaga';
import { getFormattedMessage } from 'utils/formatted-message';

import { fetchAssociationByName } from './actions';
import saga from './sagas';
import messages from './messages';

const { RIGHT_TO_LEFT, LEFT_TO_RIGHT } = TEXT_DIRECTION;
const SAGA_KEY = 'AssociationByName';

const AssociationByName = () => {
  const association = useSelector(associationByNameSelector);
  const dispatch = useDispatch();
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;
  const label = getFormattedMessage(messages.ASSOCIATION_BY_NAME);

  useInjectSaga({ key: SAGA_KEY, saga });

  const handleChange = ({ target: { value } }) => {
    dispatch(fetchAssociationByName(value));
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          marginLeft: '20%',
        }}
      >
        <bdo dir={isRTLDirection ? RIGHT_TO_LEFT : LEFT_TO_RIGHT}>
          <span> {label}</span>
        </bdo>
        <Input
          className={classNames({ 'rtl__input-direction': isRTLDirection })}
          style={{ marginTop: 10 }}
          onChange={handleChange}
        />
      </div>
      <Divider style={{ color: 'black' }} />
      <AssociationForm disabled initialValues={association} />
    </div>
  );
};

export default AssociationByName;
