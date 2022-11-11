
import { all, spawn } from 'redux-saga/effects';

import { saga as bootstrapSaga } from './bootstrapSaga';

const rootSaga = function*() {
  yield all([
    spawn(bootstrapSaga),
  ]);

};

export default rootSaga;
