import searchAPI from './requestAPI';

export const LOGIN = 'LOGIN';
export const ADD_COST = 'ADD_COST';
export const REMOVE_COST = 'REMOVE_COST';
export const EDIT_COST = 'EDIT_COST';

export const userLogin = (userData) => ({ type: 'LOGIN', payload: userData });

export const addCost = (value) => ({ type: 'ADD_COST', payload: value });
export const removeCost = (value) => ({ type: 'REMOVE_COST', payload: value });
export const editCost = (value) => ({ type: 'EDIT_COST', payload: value });

export const expenseControlThunk = () => async (dispacth) => {
  const apiResponse = await searchAPI();
  console.log(apiResponse);
  // const cost = dispacth(addCost());
  // console.log(cost);
};

/* export const REQUEST_API = 'REQUEST_API';
export const GET_DATA = 'GET_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestAPI = () => ({ type: REQUEST_API });
export const saveCurrencies = (code) => ({ type: GET_DATA, code });
export const failedRequest = (error) => ({ type: FAILED_REQUEST, error });

export const getCurrenciesThunk = () => async (dispacth) => {
  dispacth(requestAPI());
  try {
    const currencies = await searchAPI();
    console.log(currencies);
    return dispacth(saveCurrencies(currencies));
  } catch (error) {
    return dispacth(failedRequest(error));
  }
}; */
