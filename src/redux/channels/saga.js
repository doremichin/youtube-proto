import { takeEvery, call, put } from 'redux-saga/effects';

import { getChannelsData, setChannelsData } from './slice';
import { getChannelsDataRest } from '../../api';

function* getChannels({ payload }) {
  const result = yield call(getChannelsDataRest, payload);
  yield put(setChannelsData({ id: payload.id, data: result }));
}

function* saga() {
  yield takeEvery(getChannelsData, getChannels);
}

export default saga;
