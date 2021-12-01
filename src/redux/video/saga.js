import {
  takeLatest, call, put, takeEvery,
} from 'redux-saga/effects';

import {
  getNewVideoList,
  getVideoById,
  getVideoComments,
  getVideoList,
  getVideoStatistics,
  setNewVideoList,
  setVideoById,
  setVideoComments,
  setVideoList, setVideoStatistics,
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

function* getNewVideoListSaga({ payload }) {
  const result = yield call(getVideoListRest, payload);
  yield put(setNewVideoList(result));
}

function* getVideoStatisticsSaga({ payload }) {
  const result = yield call(getVideoListRest, payload);
  yield put(setVideoStatistics({ id: payload.id, data: result }));
}

function* saga() {
  yield takeLatest(getVideoById.type, getVideoByIdSaga);
  yield takeLatest(getVideoList.type, getVideoListSaga);
  yield takeLatest(getVideoComments.type, getVideoCommentsSaga);
  yield takeLatest(getNewVideoList.type, getNewVideoListSaga);
  yield takeEvery(getVideoStatistics.type, getVideoStatisticsSaga);
}

export default saga;
