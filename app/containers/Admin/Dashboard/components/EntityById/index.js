import { Divider, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { entityByIdSelector } from 'redux/selectors';
import { useInjectSaga } from 'utils/injectSaga';

import EntityForm from '../../../../Forms/EntityForm/EntityForm';
import { fetchEntityById } from './actions';
import saga from './sagas';

const SAGA_KEY = 'EntityById';

const EntityById = () => {
  const entity = useSelector(entityByIdSelector);
  const dispatch = useDispatch();

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
        <span> Search Entity by ID</span>
        <Input
          style={{ marginTop: 10 }}
          placeholder="Search Entity by ID"
          onChange={handleChange}
        />
      </div>
      <Divider style={{ color: 'black' }} />
      <EntityForm disabled initialValues={entity} />
    </div>
  );
};

export default EntityById;
