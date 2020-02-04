import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import { FORMS } from 'redux/actions/action-types';
import {
  errorSubmitAssociationForm,
  successSubmitAssociationForm,
} from 'redux/actions/form-actions';
import { API_ENDPOINTS } from 'common/constants';
import { notification } from 'antd';
import {
  errorNotification,
  successNotification,
} from '../../../../utils/notification-utils';

const postRequest = payload =>
  axios.post(API_ENDPOINTS.POST.ASSOCIATION, payload);

function* submitAssociation({ payload: { data } }) {
  try {
    const response = yield call(postRequest, data);
    if (response) {
      yield put(successSubmitAssociationForm(response.json()));
      notification.success(
        successNotification('The Entity Form has been successfully submitted!'),
      );
    }
  } catch (error) {
    yield put(errorSubmitAssociationForm(error));
    notification.error(
      errorNotification('Error while submitting the Association Form'),
    );
  }
}

function* associationFormSaga() {
  yield takeEvery(FORMS.SUBMIT_ASSOCIATION_FORM, submitAssociation);
}

export default associationFormSaga;
