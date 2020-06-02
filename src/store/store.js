import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { imagesReducer } from './reducers/images';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  imagesReducer,
  applyMiddleware(sagaMiddleWare)
);

export { store };