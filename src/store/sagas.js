import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_IMAGE, ADD_IMAGE } from './actionTypes/images';

import { getImageUrlAsync } from './api';

function* fetchImage() {
  const { id, url, time, title} = yield call(getImageUrlAsync);
  yield put({ type: ADD_IMAGE, id, url, time, title });
}

export function* apiSaga() {
  yield takeEvery(FETCH_IMAGE, fetchImage);
}