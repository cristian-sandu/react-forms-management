import { Button, Divider, Input } from 'antd';
import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { useTextDirection } from 'common/hooks';
import { EMPTY_STRING, TEXT_DIRECTION } from 'common/constants';
import EntityForm from 'containers/Forms/EntityForm/EntityForm';
import { entityByNameSelector } from 'redux/selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { getFormattedMessage } from 'utils/formatted-message';

import { fetchEntityByName } from './actions';
import saga from './sagas';
import messages from './messages';

const { RIGHT_TO_LEFT, LEFT_TO_RIGHT } = TEXT_DIRECTION;
const SAGA_KEY = 'EntityByName';

const EntityByName = () => {
  const [entityName, setEntityName] = useState(EMPTY_STRING);
  const entity = useSelector(entityByNameSelector);
  const dispatch = useDispatch();
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === RIGHT_TO_LEFT;
  const label = getFormattedMessage(messages.ENTITY_BY_NAME);

  useInjectSaga({ key: SAGA_KEY, saga });

  const handleChange = ({ target: { value } }) => {
    setEntityName(value);
  };

  const handleSearch = () => {
    if (!entityName) return;
    dispatch(fetchEntityByName(entityName));
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
      <EntityForm disabled initialValues={entity} />
    </div>
  );
};

export default EntityByName;
