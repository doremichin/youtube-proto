import { takeLatest, call, put } from 'redux-saga/effects';

import { Action } from './slice';
import { getSearchResultsRest } from '../../api';

function* getSearchResults({ payload }) {
  const result = yield call(getSearchResultsRest, payload);
  yield put(Action.Creators.setSearchResults(result));
}

function* saga() {
  yield takeLatest(Action.Types.GET_SEARCH_RESULTS, getSearchResults);
}

export default saga;
