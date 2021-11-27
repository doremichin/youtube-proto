import { takeLatest, call, put } from 'redux-saga/effects';

import { searchActions } from './slice';
import { getSearchResultsRest } from '../../api';

function* getSearchResults({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(searchActions.setSearchResults(result));
}

function* saga() {
  yield takeLatest(searchActions.getSearchResults, getSearchResults);
}

export default saga;
