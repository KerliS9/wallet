// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_COST, REMOVE_COST } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_COST:
    return { ...state, expenses: action.payload };
  case REMOVE_COST:
    return {
      ...state,
      expenses: [...state.expenses.filter((id) => id !== action.id)],
    };
  default:
    return state;
  }
}

export default wallet;
