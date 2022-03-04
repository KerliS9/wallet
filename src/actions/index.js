// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_COST = 'ADD_COST';
export const REMOVE_COST = 'REMOVE_COST';
export const EDIT_COST = 'EDIT_COST';

export const userLogin = (userData) => ({ type: 'LOGIN', payload: userData });

/* export const addCost = (value) => ({ type: 'ADD_COST', payload: value });
export const removeCost = (value) => ({ type: 'REMOVE_COST', payload: value });
export const editCost = (value) => ({ type: 'EDIT_COST', payload: value });
 */
