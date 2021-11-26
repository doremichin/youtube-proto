import { takeEvery, call, put } from 'redux-saga/effects';

import { Action } from './slice';
import { getChannelsDataRest } from '../../api';

function* getChannelsData({ payload }) {
  const result = yield call(getChannelsDataRest, payload);
  yield put(Action.Creators.setChannelsData({ id: payload.id, data: result }));
}

function* saga() {
  yield takeEvery(Action.Types.GET_CHANNELS_DATA, getChannelsData);
}

export default saga;
