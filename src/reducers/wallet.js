// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { ADD_COST, REMOVE_COST, GET_DATA } from '../actions/index';
import { REQUEST_API, GET_DATA, FAILED_REQUEST, ADD_COST } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, loading: true };
  case GET_DATA:
    return { ...state, currencies: action.payload };
  case FAILED_REQUEST:
    return { ...state, loading: false };
  case ADD_COST:
    return { ...state, expenses: action.payload };
  /* case REMOVE_COST:
    return {
      ...state,
      expenses: [...state.expenses.filter((id) => id !== action.id)],
    }; */
  default:
    return state;
  }
}

export default wallet;
