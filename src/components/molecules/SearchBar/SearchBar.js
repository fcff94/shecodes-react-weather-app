import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

function SearchBar() {
	function getCurrentLocation() {}

	function convertUnits() {}

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
						<Button type="submit" customClass="has-border" value="S" />
						<Button
					type="button"
               customClass="has-border"
					value="L"
					onClick={getCurrentLocation}
				/>
					</div>
				</form>
			</div>
			{/* <div className="col-2">
				<Button
					type="button"
					customClass="mx-1"
					value="L"
					onClick={getCurrentLocation}
				/>
			</div>
			<div className="col-2">
				<Button
					type="button"
					className="units-button"
					value="ºC"
					onClick={convertUnits}
				/>
			</div> */}
		</div>
	);
}

export default SearchBar;


