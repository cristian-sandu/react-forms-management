import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import { FORMS } from 'redux/actions/action-types';
import {
  errorSubmitAssociationForm,
  successSubmitAssociationForm,
} from 'redux/actions/form-actions';
import { API_ENDPOINTS } from 'common/constants';

const postRequest = payload =>
  axios.post(API_ENDPOINTS.POST.ASSOCIATION, payload);

function* submitAssociation({ payload: { data } }) {
  try {
    const response = yield call(postRequest, data);
    if (response) {
      yield put(successSubmitAssociationForm(response.json()));
    }
  } catch (error) {
    yield put(errorSubmitAssociationForm(error));
  }
}

function* associationFormSaga() {
  yield takeEvery(FORMS.SUBMIT_ASSOCIATION_FORM, submitAssociation);
}

export default associationFormSaga;
