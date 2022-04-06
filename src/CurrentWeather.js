import React from "react";
import FormatDate from "./FormatDate";
import TemperatureUnits from "./TemperatureUnits";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1> {props.data.city}</h1>
      <div className="row">
        <div className="col-3">
          <WeatherIcon code={props.data.icon} size={80} />
        </div>
        <div className="col-5">
          <TemperatureUnits celsius={props.data.temperature} />
        </div>
        <div className="col-4">
          <ul className="extra-info">
            <li>{props.data.description}</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      <span className="last-updated-time">
        Last Updated:
        <FormatDate date={props.data.date} />
      </span>
    </div>
  );
}
