import axios from 'axios';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_ENDPOINTS } from 'common/constants';
import { errorNotification } from 'utils/notification-utils';

import { ASSOCIATIONS } from './actions/types';
import {
  receiveAssociationsError,
  receiveAssociationsSuccess,
} from './actions/actions';

const getRequest = () => axios.get(API_ENDPOINTS.GET.ASSOCIATIONS);

function* fetchAssociations() {
  try {
    const response = yield call(getRequest);
    if (response) {
      yield put(receiveAssociationsSuccess(response.json()));
    }
  } catch (e) {
    yield put(receiveAssociationsError());
    notification.error(errorNotification('Error while receiving Associations'));
  }
}

function* associationsSaga() {
  yield takeLatest(ASSOCIATIONS.FETCH, fetchAssociations);
}

export default associationsSaga;
