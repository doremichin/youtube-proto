import { takeLatest, call, put } from 'redux-saga/effects';

import { getSearchResultsRest } from '../../api';
import {
  getRelatedVideos, getSearchResults, setRelatedVideos, setSearchResults,
} from './slice';

function* getSearchResultsSaga({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(setSearchResults(result));
}
function* getRelatedVideosSaga({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(setRelatedVideos(result));
}

function* saga() {
  yield takeLatest(getSearchResults.type, getSearchResultsSaga);
  yield takeLatest(getRelatedVideos.type, getRelatedVideosSaga);
}

export default saga;
