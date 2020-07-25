import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

// This function is an action creator
// We will dispatch and send this to our redux reducer
export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user,
	};
}

export function setAuthorizationToken(token) {
	setTokenHeader(token);
}

// We need to make sure we can dispatch some other action inside of here
// We will use a thunk for this
export function logout() {
	return (dispatch) => {
		localStorage.clear();
		setAuthorizationToken(false);
		// We call setCurrentUser with empty object instead of a populated one to log out
		dispatch(setCurrentUser({}));
	};
}

// Run this function to log in and sign up
// Type will be sign up or sign in
// userData will come in from request
// We return a function with dispatch
export function authUser(type, userData) {
	// We have to wait for our API call to finish before dispatching this method
	// We need another promise to make sure we wait until the API call is finished
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			return (
				apiCall("post", `/api/auth/${type}`, userData)
					// Destructuring our API response to get token
					.then(({ token, ...user }) => {
						// Mark user as logged in
						// Key is jwtToken with value of token
						localStorage.setItem("jwtToken", token);
						setAuthorizationToken(token);
						// Now we dispatch out ACTION CREATOR called setCurrentUser and pass user
						// This will create the user in our redux store
						dispatch(setCurrentUser(user));
						// if there were any previous errors, we dispatch remove error
						dispatch(removeError());
						resolve();
					})
					.catch((err) => {
						// If there is an error we dispatch add error with the message
						dispatch(addError(err.message));
						reject();
					})
			);
		});
	};
}
