import { fork } from 'redux-saga/effects';

import searchSaga from './search/saga';

function* sagas() {
  yield fork(searchSaga);
}

export default sagas;
