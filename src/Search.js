import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    setMessage(
      `This is a test to make sure the button is working correctly for ${city}`
    );
  }

  return (
    <div className="Search">
      <nav className="navbar nav-bar-dark">
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="City"
            autoComplete="off"
            autoFocus="on"
            onChange={updateCity}
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
          <button type="button" className="btn btn-dark current-location">
            Current
          </button>
        </form>
        <h6>{message}</h6>
      </nav>
    </div>
  );
}
