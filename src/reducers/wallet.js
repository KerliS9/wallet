import { REQUEST_API, GET_DATA, FAILED_REQUEST,
  ADD_COST, REMOVE_COST, EDIT_COST, SAVE_EDIT_COST } from '../actions/index';

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
    return { ...state, isEditing: false, expenses: [...state.expenses, action.payload] };
  case REMOVE_COST:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id) };
  case EDIT_COST:
    return { ...state, isEditing: true };
  case SAVE_EDIT_COST:
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses.map((expense) => (
        expense.id === action.id ? { ...expense, ...action.id } : expense
      )),
    };
  default:
    return state;
  }
}

export default wallet;
