import React, { useEffect } from 'react';
import { isEmpty } from 'ramda';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';

import { associationsSelector } from './selectors';
import { fetchAssociations } from './actions/actions';
import columns from './utils/column-config';
import saga from './sagas';

const SAGA_KEY = 'Associations';

const Associations = () => {
  const dispatch = useDispatch();
  const associations = useSelector(associationsSelector);

  useInjectSaga({ key: SAGA_KEY, saga });

  useEffect(() => {
    dispatch(fetchAssociations());
  }, [dispatch]);

  return (
    (!isEmpty(associations) && (
      <Table
        pagination={false}
        style={{ overflowX: 'scroll' }}
        bordered
        dataSource={associations}
        columns={columns}
      />
    )) || <Table />
  );
};

export default Associations;
