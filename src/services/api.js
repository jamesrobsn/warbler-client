import axios from "axios";

export function setTokenHeader(token) {
	// if we pass in a token
	if (token) {
		// Add a common header called Authorization with value of Bearer and token
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		// Otherwise we delete Authorization when user logs out
		delete axios.defaults.headers.common["Authorization"];
	}
}

// Generic function that will return a PROMISE
// We will resolve the promise when our actions have resolved
export function apiCall(method, path, data) {
	// Promise accepts a function with 2 parameters
	return new Promise((resolve, reject) => {
		// We will return our axios request with whatever method we pass in
		// This returns a functions with two parameters
		return axios[method.toLowerCase()](path, data)
			.then((res) => {
				return resolve(res.data);
			})
			.catch((err) => {
				return reject(err.response.data.error);
			});
	});
}
