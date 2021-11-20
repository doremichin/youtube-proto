import { takeLatest, call, put } from 'redux-saga/effects';

import { Action } from './slice';
import { getVideoByIdRest, getVideoListRest } from '../../api';

function* getVideoById({ payload }) {
  const result = yield call(getVideoByIdRest, payload);
  yield put(Action.Creators.setVideoById(result));
}
function* getVideoList({ payload }) {
  const result = yield call(getVideoListRest, payload);
  console.log(result);
  yield put(Action.Creators.setVideoList(result));
}

function* saga() {
  yield takeLatest(Action.Types.GET_VIDEO_BY_ID, getVideoById);
  yield takeLatest(Action.Types.GET_VIDEO_LIST, getVideoList);
}

export default saga;
