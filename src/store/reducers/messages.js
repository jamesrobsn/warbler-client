import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

// function with a default state
const message = (state = [], action) => {
	switch (action.type) {
		// When LOAD_MESSAGES action type, we return a copy of whatever messages there are
		case LOAD_MESSAGES:
			return [...action.messages];
		case REMOVE_MESSAGE:
			return state.filter((message) => message._id !== action.id);
		default:
			return state;
	}
};

export default message;
