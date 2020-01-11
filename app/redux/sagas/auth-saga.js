import { takeEvery } from 'redux-saga/effects';

import { AUTHENTICATION } from '../actions/action-types';

function* authSaga() {
  yield takeEvery(AUTHENTICATION.LOGIN, persistAuth);
}

function* persistAuth({ payload: { user } }) {
  yield localStorage.setItem('user', JSON.stringify(user));
}

export default authSaga;
