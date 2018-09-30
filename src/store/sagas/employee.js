import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as EmployeActions } from '../ducks/employee';

export function* employeeRequest(action) {
  try {
    const response = yield call(api.get, '/api/employees');
    console.tron.log(response);
    yield put(EmployeActions.getSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    yield put(EmployeActions.getFailure(error.response.data.message));
  }
}
