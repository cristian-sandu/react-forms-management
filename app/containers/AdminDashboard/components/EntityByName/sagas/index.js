import axios from 'axios';
import { API_ENDPOINTS } from 'common/constants';
import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_ENTITY_BY_NAME } from '../actions/types';
import { fetchEntityByNameError, fetchEntityByNameSuccess } from '../actions';
import mockEntity from '../mocks';

const getRequest = payload =>
  axios.get(API_ENDPOINTS.GET.ENTITY_BY_NAME, payload);

function* fetchEntity({ payload: { value } }) {
  try {
    const response = yield call(getRequest, value);
    if (response) {
      yield put(fetchEntityByNameSuccess(response.json()));
    }
  } catch (e) {
    yield put(fetchEntityByNameError());
    yield put(fetchEntityByNameSuccess(mockEntity)); // @TODO this is to mock successful response
  }
}

function* fetchEntityByNameSaga() {
  yield takeEvery(FETCH_ENTITY_BY_NAME.FETCH, fetchEntity);
}

export default fetchEntityByNameSaga;
