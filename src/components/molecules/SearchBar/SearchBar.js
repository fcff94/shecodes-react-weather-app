import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

function SearchBar() {
  function getCurrentLocation() {

  }

  function convertUnits() {

  }

  function handleCity() {

  }

  function handleSubmit() {

  }

  return (
    <div className="search-area">
      <form handleSubmit={handleSubmit} className="d-flex">
        <Input
          type="search"
          placeholder="Search city..."
          onChange={handleCity}
        />
        <Button type="submit" customClass="ms-1" value="S"/>
        <Button type="button" customClass="mx-1" value="L" onClick={getCurrentLocation}/>
        
      </form>
      <Button
        type="button"
        className="units-button"
        value="ºC"
        onClick={convertUnits}/>
    </div>
  );
}

export default SearchBar;
