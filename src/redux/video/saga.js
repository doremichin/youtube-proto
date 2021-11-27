import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getVideoById, getVideoComments, getVideoList, setVideoById, setVideoComments, setVideoList,
} from './slice';
import { getVideoByIdRest, getVideoCommentsRest, getVideoListRest } from '../../api';

function* asyncGetVideoById({ payload }) {
  const result = yield call(getVideoByIdRest, payload);
  yield put(setVideoById(result));
}
function* asyncGetVideoList({ payload }) {
  const result = yield call(getVideoListRest, payload);
  yield put(setVideoList(result));
}
function* asyncGetVideoComments({ payload }) {
  const result = yield call(getVideoCommentsRest, payload);
  yield put(setVideoComments(result));
}

function* saga() {
  yield takeLatest(getVideoById, asyncGetVideoById);
  yield takeLatest(getVideoList, asyncGetVideoList);
  yield takeLatest(getVideoComments, asyncGetVideoComments);
}

export default saga;
