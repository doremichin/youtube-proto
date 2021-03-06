import {
  takeLatest, call, put, takeEvery,
} from 'redux-saga/effects';

import { getSearchResultsRest } from '../../api';
import {
  getNextRelatedVideos, getNextSearchResults,
  getRelatedVideos,
  getSearchResults,
  setNextRelatedVideos,
  setNextSearchResults,
  setRelatedVideos,
  setSearchResults,
} from './slice';

function* getSearchResultsSaga({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(setSearchResults(result));
}
function* getNextSearchResultsSaga({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(setNextSearchResults(result));
}

function* getRelatedVideosSaga({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(setRelatedVideos(result));
}

function* getNextRelatedVideosSaga({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(setNextRelatedVideos(result));
}

function* saga() {
  yield takeLatest(getSearchResults.type, getSearchResultsSaga);
  yield takeLatest(getNextSearchResults.type, getNextSearchResultsSaga);
  yield takeEvery(getRelatedVideos.type, getRelatedVideosSaga);
  yield takeEvery(getNextRelatedVideos.type, getNextRelatedVideosSaga);
}

export default saga;
