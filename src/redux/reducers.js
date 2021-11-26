import { combineReducers } from 'redux';

import searchReducer from './search/slice';
import appReducer from './app/slice';
import videoReducer from './video/slice';
import channelsReducer from './channels/slice';

const reducers = combineReducers({
  app: appReducer,
  search: searchReducer,
  video: videoReducer,
  channels: channelsReducer,
});

export default reducers;
