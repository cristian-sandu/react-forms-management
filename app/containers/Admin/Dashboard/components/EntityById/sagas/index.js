import axios from 'axios';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_ENDPOINTS } from 'common/constants';
import { errorNotification } from 'utils/notification-utils';

import { FETCH_ENTITY_BY_ID } from '../actions/types';
import { fetchEntityByIdError, fetchEntityByIdSuccess } from '../actions';

const getRequest = entityId => {
  const config = {
    params: {
      entityId,
    },
  };
  return axios.get(API_ENDPOINTS.GET.ENTITY_BY_ID, config);
};

function* fetchEntity({ payload: { value } }) {
  try {
    const response = yield call(getRequest, value);
    if (response) {
      yield put(fetchEntityByIdSuccess(response.json()));
    }
  } catch (e) {
    yield put(fetchEntityByIdError());
    notification.error(
      errorNotification(`Error while receiving Entity ${value} by ID`),
    );
  }
}

function* fetchEntityByIdSaga() {
  yield takeLatest(FETCH_ENTITY_BY_ID.FETCH, fetchEntity);
}

export default fetchEntityByIdSaga;
