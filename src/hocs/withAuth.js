import React, { Component } from "react";
// Need connect because we will need to connect to the redux store to see if the user is authenticated
import { connect } from "react-redux";

// This function accepts some component to be rendered
export default function withAuth(ComponentToBeRendered) {
	// Using two LIFECYCLE methods
	class Authenticate extends Component {
		// When it mounts if they aren't authenticated we send them to sign in
		componentWillMount() {
			if (!this.props.isAuthenticated) {
				this.props.history.push("/signin");
			}
		}
		// Make sure they are logged in to access any props
		componentWillUpdate(nextProps) {
			if (!this.props.isAuthenticated) {
				this.props.history.push("/signin");
			}
		}
		render() {
			// Return the component to be rendered and any props
			return <ComponentToBeRendered {...this.props} />;
		}
	}

	// We get some state from redux
	function mapStateToProps(state) {
		return {
			isAuthenticated: state.currentUser.isAuthenticated,
		};
	}

	return connect(mapStateToProps)(Authenticate);
}
