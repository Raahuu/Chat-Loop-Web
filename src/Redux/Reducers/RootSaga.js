import { takeLatest } from "redux-saga/effects";

import reducer1 from './reducer1'

import {ITEM} from '../constants'

export default function* watcherSaga() {
  yield takeLatest(ITEM, reducer1.saga);
}
