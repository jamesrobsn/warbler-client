import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
	// Make sure to use error function to get the right value of the keyword "this"
	logout = (e) => {
		e.preventDefault();
		// We get this from mapStateToProps
		this.props.logout();
	};
	render() {
		return (
			<nav className="navbar navbar-expand">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">
							<img src={Logo} alt="Warbler Home" />
						</Link>
					</div>
					{this.props.currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link
									to={`/users/${this.props.currentUser.user.id}/messages/new`}
								>
									New Message
								</Link>
							</li>
							<li>
								<a href="#0" onClick={this.logout}>
									Log Out
								</a>
							</li>
						</ul>
					) : (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
							<li>
								<Link to="/signin">Log In</Link>
							</li>
						</ul>
					)}
				</div>
			</nav>
		);
	}
}

// Create connection to redux store
// Pass in state from redux state and return an object
// The key of currentUser will be placed on props
function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
	};
}

// Don't have a map dispatched yet -- will change
// Wrap it in Navbar
// He called this mapDispatchToProps at one point...
export default connect(mapStateToProps, { logout })(Navbar);
