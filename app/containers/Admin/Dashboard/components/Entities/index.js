import React, { useEffect } from 'react';
import { isEmpty } from 'ramda';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';

import { entitiesSelector } from './selectors';
import { fetchEntities } from './actions/actions';
import columns from './utils/column-config';
import saga from './sagas';

const SAGA_KEY = 'Entities';

const Entities = () => {
  const dispatch = useDispatch();
  const entities = useSelector(entitiesSelector);

  useInjectSaga({ key: SAGA_KEY, saga });

  useEffect(() => {
    dispatch(fetchEntities());
  }, [dispatch]);

  return (
    (!isEmpty(entities) && (
      <Table
        pagination={false}
        style={{ overflowX: 'scroll' }}
        bordered
        dataSource={entities}
        columns={columns}
      />
    )) || <Table />
  );
};

export default Entities;
