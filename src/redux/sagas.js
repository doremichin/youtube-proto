import { fork } from 'redux-saga/effects';

import searchSaga from './search/saga';
import videoSaga from './video/saga';

function* sagas() {
  yield fork(searchSaga);
  yield fork(videoSaga);
}

export default sagas;
