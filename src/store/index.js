// Don't need to specify index.js by convention
import rootReducer from "./reducers";
// Compose allows us to combine functions together
// ApplyMiddleware lets us use middleware like thunk
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// this will make a store that is the result of the creatStore function brought in from redux
export function configureStore() {
	// First param is alway function or reducer
	// Second param is to enhance the store
	// Dev Tools initialization is to help with debugging in Chrome
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : (f) => f
		)
	);
	return store;
}
