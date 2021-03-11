import { call, put } from 'redux-saga/effects';

import { ITEM_SUCCESS, ITEM_FAILURE } from '../../constants';
import API from '../../../API';

function fetchDog() {
  console.log('here api: ', );
  return API.get('/random');
}

function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    yield put({ type: ITEM_SUCCESS, payload: dog });
  } catch (error) {
    yield put({ type: ITEM_FAILURE, error });
  }
}

export default workerSaga;