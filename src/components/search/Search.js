import React from "react";

function Search() {
  return (
    <div class="search-area">
      <form id="search-city-form" class="d-flex">
        <input
          type="search"
          class="form-control"
          placeholder="City name..."
          id="search-input"
        />
        <button type="submit" class="btn btn-primary ms-1" id="search-city">
          <i class="bi bi-search"></i>
        </button>
        <button
          type="button"
          class="btn btn-primary mx-1"
          id="current-location"
        >
          <i class="bi bi-geo-alt-fill"></i>
        </button>
      </form>
      <button
        id="celsius"
        type="button"
        class="btn btn-primary d-none units-button"
      >
        ºC
      </button>
      <button
        id="fahrenheit"
        type="button"
        class="btn btn-primary units-button"
      >
        ºF
      </button>
    </div>
  );
}

export default Search;
