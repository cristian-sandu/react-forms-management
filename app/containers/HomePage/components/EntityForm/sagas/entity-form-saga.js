import { takeEvery } from 'redux-saga/effects';
import { FORMS } from 'redux/actions/action-types';

function* entityFormSaga() {
  yield takeEvery(FORMS.SUBMIT_ENTITY_FORM, submitEntity);
}

function* submitEntity({ payload: { data } }) {
  console.log('>> Submitting Entity Form', data);
}

export default entityFormSaga;
