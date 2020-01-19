import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { API_ENDPOINTS } from 'common/constants';

import { ENTITIES } from './actions/types';
import {
  receiveEntitiesError,
  receiveEntitiesSuccess,
} from './actions/actions';
import mockEntities from './mocks';

const getRequest = () => axios.get(API_ENDPOINTS.GET.ENTITIES);

function* fetchEntities() {
  try {
    const response = yield call(getRequest);
    if (response) {
      yield put(receiveEntitiesSuccess(response.json()));
    }
  } catch (e) {
    yield put(receiveEntitiesError());
    // The line 22 is a temporary mock and should be removed when BackEnd is integrated
    yield put(receiveEntitiesSuccess(mockEntities));
  }
}

function* entitiesSaga() {
  yield takeEvery(ENTITIES.FETCH, fetchEntities);
}

export default entitiesSaga;
