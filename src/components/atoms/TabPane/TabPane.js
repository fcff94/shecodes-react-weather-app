import React from "react";
import "./TabPane.css";

function TabPane(props) {
	return (
		<>
			<div
				className={`tab-pane fade ${
					props.isActive ? "show active" : ""
				} ${props.customClass || ""}`}
				id={`${props.idPane}`}
				role="tabpanel"
				aria-labelledby={`${props.idPane}-tab`}
				tabIndex="0"
			>
				{props.tabContent}
			</div>
		</>
	);
}

export default TabPane;
