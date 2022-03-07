import searchAPI from './requestAPI';

export const LOGIN = 'LOGIN';
export const ADD_COST = 'ADD_COST';
export const REMOVE_COST = 'REMOVE_COST';
export const EDIT_COST = 'EDIT_COST';

export const userLogin = (userData) => ({ type: 'LOGIN', payload: userData });

export const addCost = (payload) => ({ type: 'ADD_COST', payload });
export const removeCost = (payload) => ({ type: 'REMOVE_COST', payload });
export const editCost = (payload) => ({ type: 'EDIT_COST', payload });

export const expenseControlThunk = (newExpense) => async (dispatch) => {
  const exchangesRates = await searchAPI();
  // console.log(exchangesRates);
  const newExpenseWithExchangesRates = { ...newExpense, exchangesRates };
  const cost = dispatch(addCost(newExpenseWithExchangesRates));
  console.log(cost);
};

export const REQUEST_API = 'REQUEST_API';
export const GET_DATA = 'GET_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestAPI = () => ({ type: REQUEST_API });
export const saveCurrencies = (payload) => ({ type: GET_DATA, payload });
export const failedRequest = (error) => ({ type: FAILED_REQUEST, error });

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(requestAPI());
  try {
    const api = await searchAPI();
    const currencies = Object.keys(api);
    // console.log(currencies);
    return dispatch(saveCurrencies(currencies));
  } catch (error) {
    return dispatch(failedRequest(error));
  }
};
