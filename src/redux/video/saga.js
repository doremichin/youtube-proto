import { takeLatest, call, put } from 'redux-saga/effects';

import { Action } from './slice';
import { getVideoByIdRest, getVideoCommentsRest, getVideoListRest } from '../../api';

function* getVideoById({ payload }) {
  const result = yield call(getVideoByIdRest, payload);
  yield put(Action.Creators.setVideoById(result));
}
function* getVideoList({ payload }) {
  const result = yield call(getVideoListRest, payload);
  yield put(Action.Creators.setVideoList(result));
}
function* getVideoComments({ payload }) {
  const result = yield call(getVideoCommentsRest, payload);
  yield put(Action.Creators.setVideoComments(result));
}

function* saga() {
  yield takeLatest(Action.Types.GET_VIDEO_BY_ID, getVideoById);
  yield takeLatest(Action.Types.GET_VIDEO_LIST, getVideoList);
  yield takeLatest(Action.Types.GET_VIDEO_COMMENTS, getVideoComments);
}

export default saga;
