import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
	isAuthenticated: false, // Should be true when user is logged in
	user: {}, // all the user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				// Are there keys or not?
				// Turn empty object to false or if there are keys, true
				// ALTERNATE CODE: Object.keys(action.user).length > 0
				isAuthenticated: !!Object.keys(action.user).length,
				user: action.user,
			};
		default:
			return state;
	}
};
