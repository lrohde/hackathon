import { all, takeLatest } from 'redux-saga/effects';
import { Types as ExampleTypes } from '../ducks/example';

import { exampleRequest } from './example';


export default function* rootSaga() {
  yield all([
    takeLatest(ExampleTypes.GET_REQUEST, exampleRequest),
  ]);
}
