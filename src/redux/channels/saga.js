import { takeEvery, call, put } from 'redux-saga/effects';

import {
  getChannelsCategory, getChannelsData, setChannelsCategory, setChannelsData,
} from './slice';
import { getChannelsCategoryRest, getChannelsDataRest } from '../../api';

function* getChannelsDataSaga({ payload }) {
  const result = yield call(getChannelsDataRest, payload);
  yield put(setChannelsData({ id: payload.id, data: result }));
}
function* getChannelsCategorySaga({ payload }) {
  const result = yield call(getChannelsCategoryRest, payload);
  yield put(setChannelsCategory(result));
}

function* saga() {
  yield takeEvery(getChannelsData.type, getChannelsDataSaga);
  yield takeEvery(getChannelsCategory.type, getChannelsCategorySaga);
}

export default saga;
