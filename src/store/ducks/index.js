import { combineReducers } from 'redux';

import example from './example';
import employee from './employee';
import report from './report';
import multometro from './multometro';

export default combineReducers({
  example,
  employee,
  report,
  multometro,
});
