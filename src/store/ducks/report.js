export const Types = {
  GET_REQUEST: 'report/GET_REQUEST',
  GET_SUCCESS: 'report/GET_SUCCESS',
  GET_FAILURE: 'report/GET_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function report(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error, data:[] };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: ( employee_id, section_id, start_date, end_date ) => ({
    type: Types.GET_REQUEST,
    payload: { employee_id, section_id, start_date, end_date },
  }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
