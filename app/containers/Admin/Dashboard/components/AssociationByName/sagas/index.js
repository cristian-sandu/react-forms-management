import axios from 'axios';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_ENDPOINTS } from 'common/constants';
import { errorNotification } from 'utils/notification-utils';

import { FETCH_ASSOCIATION_BY_NAME } from '../actions/types';
import {
  fetchAssociationByNameError,
  fetchAssociationByNameSuccess,
} from '../actions';

const getRequest = associationName => {
  const config = {
    params: {
      associationName,
    },
  };
  return axios.get(API_ENDPOINTS.GET.ASSOCIATION_BY_NAME, config);
};

function* fetchAssociation({ payload: { value } }) {
  try {
    const response = yield call(getRequest, value);
    if (response) {
      yield put(fetchAssociationByNameSuccess(response.json()));
    }
  } catch (e) {
    yield put(fetchAssociationByNameError());
    notification.error(
      errorNotification(`Error while receiving Association ${value} by Name`),
    );
  }
}

function* fetchAssociationByNameSaga() {
  yield takeLatest(FETCH_ASSOCIATION_BY_NAME.FETCH, fetchAssociation);
}

export default fetchAssociationByNameSaga;
