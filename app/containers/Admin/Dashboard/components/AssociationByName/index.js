import { Divider, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { associationByNameSelector } from 'redux/selectors';
import { useInjectSaga } from 'utils/injectSaga';

import AssociationForm from '../../../../Forms/AssociationForm/AssociationForm';
import { fetchAssociationByName } from './actions';
import saga from './sagas';

const SAGA_KEY = 'AssociationByName';

const AssociationByName = () => {
  const association = useSelector(associationByNameSelector);
  const dispatch = useDispatch();

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
        <span> Search Association by Name</span>
        <Input
          style={{ marginTop: 10 }}
          placeholder="Search Association by Name"
          onChange={handleChange}
        />
      </div>
      <Divider style={{ color: 'black' }} />
      <AssociationForm disabled initialValues={association} />
    </div>
  );
};

export default AssociationByName;
