import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export default (state = { message: null }, action) => {
	switch (action.type) {
		case ADD_ERROR:
			// Return whatever the previous state was along with new key of message and value of action.error
			return { ...state, message: action.error };
		case REMOVE_ERROR:
			return { ...state, message: null };
		default:
			return state;
	}
};
