import { takeLatest, call, put } from 'redux-saga/effects';

import { Action } from './slice';
import { getVideoByIdRest } from '../../api';

function* getVideoById({ payload }) {
  const result = yield call(getVideoByIdRest, payload);
  yield put(Action.Creators.setVideoById(result));
}

function* saga() {
  yield takeLatest(Action.Types.GET_VIDEO_BY_ID, getVideoById);
}

export default saga;
