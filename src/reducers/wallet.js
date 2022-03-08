// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, GET_DATA, FAILED_REQUEST,
  ADD_COST, REMOVE_COST, EDIT_COST } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  isEditing: false,
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
  case REMOVE_COST:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id) };
  case EDIT_COST:
    return { ...state, isEditing: true };
  /* case EDIT_COST:
    const indexId = state.expenses.find(({ id }) => id === action.id);
    return {
      ...state,
      expenses: state.expenses.map((id, index) => (
        index === indexId ? { ...id, ...action.id } : id)) };
    /* expenses: state.expenses.map((expense) => (
        expense.id === id ? { ... expense, action.id } : expense,
      ))}; */
    // expenses: { ...state.expenses, [action.id]: action.payload },
    // }; */
  default:
    return state;
  }
}

export default wallet;
