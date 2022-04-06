import React, { useState } from "react";

export default function TemperatureUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="today-temperature-units">
        <span className="today-temperature">{props.celsius}</span>
        <span className="units">
          <strong> °C </strong>|{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="today-temperature-units">
        <span className="today-temperature">{fahrenheit()}</span>
        <span className="units">
          <strong> °F</strong> |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
