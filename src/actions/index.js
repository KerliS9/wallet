// Coloque aqui suas actions
import searchAPI from './requestAPI';

export const LOGIN = 'LOGIN';
export const ADD_COST = 'ADD_COST';
export const REMOVE_COST = 'REMOVE_COST';
export const EDIT_COST = 'EDIT_COST';

export const userLogin = (userData) => ({ type: 'LOGIN', payload: userData });

/* export const addCost = (value) => ({ type: 'ADD_COST', payload: value });
export const removeCost = (value) => ({ type: 'REMOVE_COST', payload: value });
export const editCost = (value) => ({ type: 'EDIT_COST', payload: value });
 */

export const REQUEST_API = 'REQUEST_API';
export const GET_DATA = 'GET_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestAPI = (name) => ({ type: REQUEST_API, name });
export const getData = (code) => ({ type: GET_DATA, code });
export const failedRequest = (error) => ({ type: FAILED_REQUEST, error });

export function codeThunk(name) {
  return (dispacth) => {
    dispacth(requestAPI(name));
    console.log('apithunk', name);
    return searchAPI(name)
      .then((code) => dispacth(getData(code)))
      .catch((error) => dispacth(failedRequest(error)));
  };
}
