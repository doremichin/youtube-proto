import { fork } from 'redux-saga/effects';

import searchSaga from './search/saga';
import videoSaga from './video/saga';
import channelsSaga from './channels/saga';

function* sagas() {
  yield fork(searchSaga);
  yield fork(videoSaga);
  yield fork(channelsSaga);
}

export default sagas;
