import axios from 'axios';
import { API_ENDPOINTS } from 'common/constants';
import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_ENTITY_BY_ID } from '../actions/types';
import { fetchEntityByIdError, fetchEntityByIdSuccess } from '../actions';
import mockEntity from '../mocks';

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
    yield put(fetchEntityByIdSuccess(mockEntity)); // @TODO this is to mock successful response, should be removed later
  }
}

function* fetchEntityByIdSaga() {
  yield takeEvery(FETCH_ENTITY_BY_ID.FETCH, fetchEntity);
}

export default fetchEntityByIdSaga;
