import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row weather-forecast-date">
        <div className="col-2">
          <div>Day</div>
          <div>Weather Icon</div>
          <span>Min</span>
          <span>Max</span>
        </div>
        <div className="col-2">Hello</div>
        <div className="col-2">Hello</div>
        <div className="col-2">Hello</div>
        <div className="col-2">Hello</div>
        <div className="col-2">Hello</div>
      </div>
    </div>
  );
}
