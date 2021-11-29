import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getVideoById, getVideoComments, getVideoList, setVideoById, setVideoComments, setVideoList,
} from './slice';
import { getVideoByIdRest, getVideoCommentsRest, getVideoListRest } from '../../api';

function* getVideoByIdSaga({ payload }) {
  const result = yield call(getVideoByIdRest, payload);
  yield put(setVideoById(result));
}
function* getVideoListSaga({ payload }) {
  const result = yield call(getVideoListRest, payload);
  yield put(setVideoList(result));
}
function* getVideoCommentsSaga({ payload }) {
  const result = yield call(getVideoCommentsRest, payload);
  yield put(setVideoComments(result));
}

function* saga() {
  yield takeLatest(getVideoById.type, getVideoByIdSaga);
  yield takeLatest(getVideoList.type, getVideoListSaga);
  yield takeLatest(getVideoComments.type, getVideoCommentsSaga);
}

export default saga;
