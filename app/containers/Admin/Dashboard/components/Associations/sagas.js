import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_ENDPOINTS } from 'common/constants';

import { ASSOCIATIONS } from './actions/types';
import {
  receiveAssociationsError,
  receiveAssociationsSuccess,
} from './actions/actions';
import mockAssociations from './mocks';

const getRequest = () => axios.get(API_ENDPOINTS.GET.ASSOCIATIONS);

function* fetchAssociations() {
  try {
    const response = yield call(getRequest);
    if (response) {
      yield put(receiveAssociationsSuccess(response.json()));
    }
  } catch (e) {
    yield put(receiveAssociationsError());
    // The line 22 is a temporary mock and should be removed when BackEnd is integrated
    yield put(receiveAssociationsSuccess(mockAssociations));
  }
}

function* associationsSaga() {
  yield takeLatest(ASSOCIATIONS.FETCH, fetchAssociations);
}

export default associationsSaga;
