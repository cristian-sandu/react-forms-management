import axios from 'axios';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_ENDPOINTS } from 'common/constants';
import { errorNotification } from 'utils/notification-utils';

import { FETCH_ENTITY_BY_NAME } from '../actions/types';
import { fetchEntityByNameError, fetchEntityByNameSuccess } from '../actions';

const getRequest = entityName => {
  const config = {
    params: {
      entityName,
    },
  };
  return axios.get(API_ENDPOINTS.GET.ENTITY_BY_NAME, config);
};

function* fetchEntity({ payload: { value } }) {
  try {
    const response = yield call(getRequest, value);
    if (response) {
      yield put(fetchEntityByNameSuccess(response.json()));
    }
  } catch (e) {
    yield put(fetchEntityByNameError());
    notification.error(
      errorNotification(`Error while receiving Entity: (${value}) by Name`),
    );
  }
}

function* fetchEntityByNameSaga() {
  yield takeLatest(FETCH_ENTITY_BY_NAME.FETCH, fetchEntity);
}

export default fetchEntityByNameSaga;
