import React, { useState } from 'react';
import { Button, Divider, Input } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { associationByNameSelector } from 'redux/selectors';

import AssociationForm from 'containers/Forms/AssociationForm/AssociationForm';
import { EMPTY_STRING, TEXT_DIRECTION } from 'common/constants';
import { useTextDirection } from 'common/hooks';
import { useInjectSaga } from 'utils/injectSaga';
import { getFormattedMessage } from 'utils/formatted-message';

import { fetchAssociationByName } from './actions';
import saga from './sagas';
import messages from './messages';

const { RIGHT_TO_LEFT, LEFT_TO_RIGHT } = TEXT_DIRECTION;
const SAGA_KEY = 'AssociationByName';

const AssociationByName = () => {
  const [associationName, setAssociationName] = useState(EMPTY_STRING);
  const association = useSelector(associationByNameSelector);
  const dispatch = useDispatch();
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;
  const label = getFormattedMessage(messages.ASSOCIATION_BY_NAME);

  useInjectSaga({ key: SAGA_KEY, saga });

  const handleChange = ({ target: { value } }) => {
    setAssociationName(value);
  };

  const handleSearch = () => {
    if (!associationName) return;
    dispatch(fetchAssociationByName(associationName));
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
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <Input
            className={classNames({ 'rtl__input-direction': isRTLDirection })}
            style={{ marginTop: 10 }}
            onChange={handleChange}
          />
          <Button
            type="primary"
            style={{ marginLeft: 10 }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
      <Divider style={{ color: 'black' }} />
      <AssociationForm disabled initialValues={association} />
    </div>
  );
};

export default AssociationByName;
