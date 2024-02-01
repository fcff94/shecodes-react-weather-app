import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

function SearchBar() {
	function getCurrentLocation() {}

	function handleCity() {}

	function handleSubmit() {}

	return (
		<div className="row">
			<div className="col-12">
				<form handleSubmit={handleSubmit}>
					<div class="input-group">
						<Input
							type="search"
							placeholder="Search city..."
							onChange={handleCity}
						/>
						<Button
							type="submit"
							btnClass="primary"
							customClass="has-border"
							value="S"
							/>
						<Button
							type="button"
							btnClass="primary"
							customClass="has-border"
							value="L"
							onClick={getCurrentLocation}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
