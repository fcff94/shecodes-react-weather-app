import React from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../atoms/Button/Button";
import SliderUnit from "../SliderUnit/SliderUnit";

const Slider = (props) => {
	const chevronLeft = <FontAwesomeIcon icon="fa-chevron-left" />;
	const chevronRight = <FontAwesomeIcon icon="fa-chevron-right" />;

	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="slider-wrapper">
						<Button
							type="button"
							specialClass="js-btn-scroll"
							customClass="btn-scroll-left"
							value={chevronLeft}
							notDefaultBtn
						/>

						<div className="slider-container">
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
							<SliderUnit />
						</div>

						<Button
							type="button"
							specialClass="js-btn-scroll"
							customClass="btn-scroll-right"
							value={chevronRight}
							notDefaultBtn
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
