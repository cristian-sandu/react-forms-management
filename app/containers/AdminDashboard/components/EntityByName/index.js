import { Divider, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { entityByNameSelector } from 'redux/selectors';
import { useInjectSaga } from 'utils/injectSaga';

import EntityForm from '../../../HomePage/components/EntityForm/EntityForm';
import { fetchEntityByName } from './actions';
import saga from './sagas';

const SAGA_KEY = 'EntityByName';

const EntityByName = () => {
  const entity = useSelector(entityByNameSelector);
  const dispatch = useDispatch();

  useInjectSaga({ key: SAGA_KEY, saga });

  const handleChange = ({ target: { value } }) => {
    dispatch(fetchEntityByName(value));
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
        <span> Search Entity by Name</span>
        <Input
          style={{ marginTop: 10 }}
          placeholder="Search Entity by Name"
          onChange={handleChange}
        />
      </div>
      <Divider style={{ color: 'black' }} />
      <EntityForm disabled initialValues={entity} />
    </div>
  );
};

export default EntityByName;
