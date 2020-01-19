import { Divider, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EntityForm from 'containers/Forms/EntityForm/EntityForm';
import { TEXT_DIRECTION } from 'common/constants';
import { useTextDirection } from 'common/hooks';
import { entityByIdSelector } from 'redux/selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { getFormattedMessage } from 'utils/formatted-message';

import { fetchEntityById } from './actions';
import saga from './sagas';
import messages from './messages';
import classNames from 'classnames';

const SAGA_KEY = 'EntityById';
const { RIGHT_TO_LEFT, LEFT_TO_RIGHT } = TEXT_DIRECTION;

const EntityById = () => {
  const entity = useSelector(entityByIdSelector);
  const dispatch = useDispatch();
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;
  const label = getFormattedMessage(messages.ENTITY_BY_ID);

  useInjectSaga({ key: SAGA_KEY, saga });

  const handleChange = ({ target: { value } }) => {
    dispatch(fetchEntityById(value));
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
      <EntityForm disabled initialValues={entity} />
    </div>
  );
};

export default EntityById;
