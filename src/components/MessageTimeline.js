import React from "react";
import MessageList from "../containers/MessageList.js";
import UserAside from "./UserAside.js";

const MessageTimeline = (props) => {
	return (
		<div className="row">
			<div className="col-lg-3">
				<UserAside
					profileImageUrl={props.profileImageUrl}
					username={props.username}
				/>
			</div>
			<div className="col-lg-9">
				<MessageList />
			</div>
		</div>
	);
};

export default MessageTimeline;
