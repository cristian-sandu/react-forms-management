import { takeEvery } from 'redux-saga/effects';
import { FORMS } from 'redux/actions/action-types';

function* associationFormSaga() {
  yield takeEvery(FORMS.SUBMIT_ASSOCIATION_FORM, submitAssociation);
}

function* submitAssociation({ payload: { data } }) {
  console.log('>> Submitting Association Form', data);
}

export default associationFormSaga;
