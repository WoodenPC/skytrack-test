import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { apiSaga } from './sagas';
import { imagesReducer } from './reducers/images';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  imagesReducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(apiSaga);

export { store };