import axios from 'axios';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_ENDPOINTS } from 'common/constants';
import { errorNotification } from 'utils/notification-utils';
import { ensureArray, addKey } from 'utils/constants';

import { ENTITIES } from './actions/types';

import {
  receiveEntitiesError,
  receiveEntitiesSuccess,
} from './actions/actions';

const getRequest = () => axios.get(API_ENDPOINTS.GET.ENTITIES);

function* fetchEntities() {
  try {
    const response = yield call(getRequest);
    if (response) {
      yield put(receiveEntitiesSuccess(addKey(ensureArray(response.data))));
    }
  } catch (e) {
    yield put(receiveEntitiesError());
    notification.error(errorNotification('Error while receiving Entities'));
  }
}

function* entitiesSaga() {
  yield takeLatest(ENTITIES.FETCH, fetchEntities);
}

export default entitiesSaga;
