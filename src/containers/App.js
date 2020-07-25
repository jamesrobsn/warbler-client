import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";
const store = configureStore();

// If the token exists we want to make sure to set it in all future requests
// If server goes down, or redux we can check local storage and
// Repopulate/rehydrate our state with the current user
if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	// Prevent someone from manually tampering with the key of jwtToken in local storage
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch (err) {
		// If they tamper with the jwtToken we will forcibly log them out
		store.dispatch(setCurrentUser({}));
	}
}

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="onboarding">
				<Navbar />
				<Main />
			</div>
		</Router>
	</Provider>
);

export default App;
