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
    return { ...state, expenses: [...state.expenses, action.payload] };
  /* case REMOVE_COST:
  const newArrayOfExpenses = state.expenses.filter(expense => expense.id !== action.payload)
    return {
      ...state,
      expenses: [...state.expenses.filter((id) => id !== action.id)],(ou id !== action.payload) (ou expenses: newArrayOfExpenses)
    }; */
  default:
    return state;
  }
}

export default wallet;
