import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import { REGISTRATION } from 'redux/actions/action-types';
import {
  registrationSuccess,
  registrationError,
} from 'redux/actions/registration-actions';
import { API_ENDPOINTS } from 'common/constants';

const postRequest = payload =>
  axios.post(API_ENDPOINTS.POST.REGISTRATION, payload);

function* submitRegistration({ payload: { data } }) {
  try {
    const response = yield call(postRequest, data);
    if (response) {
      yield put(registrationSuccess(response.json()));
    }
  } catch (e) {
    yield put(registrationError());
  }
}

function* registrationSaga() {
  yield takeEvery(REGISTRATION.SUBMIT, submitRegistration);
}

export default registrationSaga;
