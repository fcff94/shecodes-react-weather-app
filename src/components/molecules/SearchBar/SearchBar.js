import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {
	const SearchIcon = (<FontAwesomeIcon icon="fa-magnifying-glass" />);
	const LocationIcon = (<FontAwesomeIcon icon="fa-location-crosshairs" />);
	// const LocationIcon = (<FontAwesomeIcon icon="fa-location-dot" />);

	function getCurrentLocation() {}

	function handleCity() {}

	function handleSubmit() {}

	return (
		<div className="row">
			<div className="col-12">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<Input
							type="search"
							placeholder="Search city..."
							onChange={handleCity}
						/>
						<Button
							type="submit"
							btnClass="primary"
							customClass="has-border"
							value={SearchIcon}
							/>
						<Button
							type="button"
							btnClass="primary"
							customClass="has-border"
							value={LocationIcon}
							onClick={getCurrentLocation}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
