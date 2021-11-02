import { combineReducers } from 'redux';

import searchReducer from './search/slice';
import appReducer from './app/slice';

const reducers = combineReducers({
  app: appReducer,
  search: searchReducer,
});

export default reducers;
