import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";

// Adding something to this makes it available in an action creator
// Our component can get access through mapStateToProps
const rootReducer = combineReducers({
	// Object shorthand when keys and values are the same
	currentUser,
	errors,
	messages,
});

export default rootReducer;
