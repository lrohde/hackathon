import { all, takeLatest } from 'redux-saga/effects';
import { Types as EmployeeTypes } from '../ducks/employee';

import { employeeRequest } from './employee';


export default function* rootSaga() {
  yield all([
    takeLatest(EmployeeTypes.GET_REQUEST, employeeRequest),
  ]);
}
