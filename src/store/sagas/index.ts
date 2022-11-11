
import { all, spawn } from 'redux-saga/effects';

import { saga as userSaga } from '../../modules/AuthModule/store/saga';
import { saga as bootstrapSaga } from './bootstrapSaga';

const rootSaga = function*() {
  yield all([
    spawn(bootstrapSaga),
    spawn(userSaga),
  ]);

};

export default rootSaga;
