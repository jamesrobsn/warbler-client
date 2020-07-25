import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

// Two simple action creators needed in auth.js
// adding parentheses returns and OBJECT
export const addError = (error) => ({
	type: ADD_ERROR,
	error,
});

export const removeError = () => ({
	type: REMOVE_ERROR,
});
