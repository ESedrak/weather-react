import React from "react";
import FormatDate from "./FormatDate";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1> {props.data.city}</h1>
      <div className="row">
        <div className="col-3">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-icon"
          />
        </div>
        <div className="col-5 today-temperature-units">
          <span className="today-temperature">{props.data.temperature}</span>
          <span className="units"> °C </span>
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
