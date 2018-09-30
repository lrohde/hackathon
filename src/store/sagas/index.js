import { all, takeLatest } from 'redux-saga/effects';
import { Types as EmployeeTypes } from '../ducks/employee';
import { Types as ReportTypes } from '../ducks/report';
import { Types as MultometroTypes } from '../ducks/multometro';

import { employeeRequest } from './employee';
import { reportRequest } from './report';
import { multometroRequest } from './multometro';


export default function* rootSaga() {
  yield all([
    takeLatest(EmployeeTypes.GET_REQUEST, employeeRequest),
    takeLatest(ReportTypes.GET_REQUEST, reportRequest),
    takeLatest(MultometroTypes.GET_REQUEST, multometroRequest),
  ]);
}
