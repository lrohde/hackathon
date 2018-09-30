import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as MultometroActions } from '../ducks/multometro';


export function* multometroRequest(action) {
  try {
    const response = yield call(api.get, '/api/multometro');
    console.tron.log(response);
    yield put(MultometroActions.getSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    yield put(MultometroActions.getFailure(error.response.data.message));
  }
}
