import axios from 'axios';
import { API_ENDPOINTS } from 'common/constants';
import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_ASSOCIATION_BY_NAME } from '../actions/types';
import {
  fetchAssociationByNameError,
  fetchAssociationByNameSuccess,
} from '../actions';
import mockAssociation from '../mocks';

const getRequest = payload =>
  axios.get(API_ENDPOINTS.GET.ASSOCIATION_BY_NAME, payload);

function* fetchAssociation({ payload: { value } }) {
  try {
    const response = yield call(getRequest, value);
    if (response) {
      yield put(fetchAssociationByNameSuccess(response.json()));
    }
  } catch (e) {
    yield put(fetchAssociationByNameError());
    yield put(fetchAssociationByNameSuccess(mockAssociation)); // @TODO this is to mock successful response
  }
}

function* fetchAssociationByNameSaga() {
  yield takeEvery(FETCH_ASSOCIATION_BY_NAME.FETCH, fetchAssociation);
}

export default fetchAssociationByNameSaga;