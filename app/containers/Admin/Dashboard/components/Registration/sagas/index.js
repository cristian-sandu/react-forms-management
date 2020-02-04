import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { REGISTRATION } from 'redux/actions/action-types';
import {
  registrationSuccess,
  registrationError,
} from 'redux/actions/registration-actions';
import { API_ENDPOINTS } from 'common/constants';
import { notification } from 'antd';
import {
  errorNotification,
  successNotification,
} from 'utils/notification-utils';

const postRequest = payload =>
  axios.post(API_ENDPOINTS.POST.REGISTRATION, payload);

function* submitRegistration({ payload: { data } }) {
  try {
    const response = yield call(postRequest, data);
    if (response) {
      yield put(registrationSuccess(response));
      notification.success(successNotification('Registration successful !'));
    }
  } catch (e) {
    yield put(registrationError());
    notification.error(errorNotification('Registration error'));
  }
}

function* registrationSaga() {
  yield takeLatest(REGISTRATION.SUBMIT, submitRegistration);
}

export default registrationSaga;
