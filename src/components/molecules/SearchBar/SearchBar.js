import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar({setCity}) {
	const [inputValue, setInputValue] = useState(null);
	const SearchIcon = (<FontAwesomeIcon icon="fa-magnifying-glass" />);
	const LocationIcon = (<FontAwesomeIcon icon="fa-location-crosshairs" />);
	// const LocationIcon = (<FontAwesomeIcon icon="fa-location-dot" />);

	function getCurrentLocation() {}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleCity(e) {
		setInputValue(e.target.value);
	}

	function handleSearch() {
		setCity(inputValue);
	}


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
							onClick={handleSearch}
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
