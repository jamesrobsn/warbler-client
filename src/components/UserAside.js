import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

// Needed parentheses instead of curly braces
const UserAside = ({ profileImageUrl, username }) => (
	<aside className="aside">
		<div className="panel panel-default">
			<div className="panel-body">
				<img
					src={profileImageUrl || DefaultProfileImg}
					alt={username}
					width="200"
					height="200"
					className="img-thumbnail align-self-center"
				/>
			</div>
		</div>
	</aside>
);

export default UserAside;
