import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { API_ENDPOINTS } from 'common/constants';
import { FORMS } from 'redux/actions/action-types';
import {
  errorSubmitEntityForm,
  successSubmitEntityForm,
} from 'redux/actions/form-actions';
import {
  successNotification,
  errorNotification,
} from 'utils/notification-utils';
import { notification } from 'antd';

const postRequest = payload => axios.post(API_ENDPOINTS.POST.ENTITY, payload);

function* submitEntity({ payload: { data } }) {
  try {
    const response = yield call(postRequest, data);
    if (response) {
      yield put(successSubmitEntityForm(response));
      notification.success(
        successNotification('The Entity Form has been successfully submitted!'),
      );
    }
  } catch (error) {
    yield put(errorSubmitEntityForm(error));
    notification.error(
      errorNotification('Error while submitting the Entity Form'),
    );
  }
}

function* entityFormSaga() {
  yield takeEvery(FORMS.SUBMIT_ENTITY_FORM, submitEntity);
}

export default entityFormSaga;
