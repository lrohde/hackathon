import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ExampleActions } from '../ducks/example';

export function* exampleRequest(action) {
  try {
    const response = yield call(api.get, `repos/${action.payload.data}`);
    console.tron.log(response);
    yield put(ExampleActions.getSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    yield put(ExampleActions.getFailure(error.response.data.message));
  }
}
