import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ReportActions } from '../ducks/report';


export function* reportRequest(action) {
  try {
    const response = yield call(api.get, '/api/filter', {
      params : {
        employee_id: action.payload.employee_id,
        section_id: action.payload.section_id,
        start_date: action.payload.start_date,
        end_date: action.payload.end_date,
      }
    });
    console.tron.log(response);
    yield put(ReportActions.getSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    yield put(ReportActions.getFailure(error.response.data.message));
  }
}
