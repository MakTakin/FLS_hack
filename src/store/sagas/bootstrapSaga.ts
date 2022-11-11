
import { all, call, fork, take } from 'redux-saga/effects';

import { getSettingsApp } from './settingsSaga';

function* bootstrapFlow() {
  yield take('USER_REQUEST_DONE');

  yield all([
    call(getSettingsApp),
  ]);
}

export function* saga() {
  yield fork(bootstrapFlow);
}
