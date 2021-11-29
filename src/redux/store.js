import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import appReducer from './app/slice';
import sagas from './sagas';
import searchReducer from './search/slice';
import videoReducer from './video/slice';
import channelsReducer from './channels/slice';
import authReducer from './auth/slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    search: searchReducer,
    video: videoReducer,
    channels: channelsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
