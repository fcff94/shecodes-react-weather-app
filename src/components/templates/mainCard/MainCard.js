import React from "react";
import CardLeft from "../../organisms/CardLeft/CardLeft";
import CardRight from "../../organisms/CardRight/CardRight";
import "./MainCard.css";

function MainCard() {
	return (
		<>
			<div className="container card-container">
				<div className="row">
						<CardLeft />
						<CardRight />
				</div>

				<div className="row">
					<div className="col-12 text-center">
					Open-source code by{" "}
				<a
					href="https://github.com/fcff94"
					target="_blank"
					rel="noreferrer"
				>
					Carolina Freitas
				</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainCard;
