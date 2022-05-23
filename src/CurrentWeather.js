import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  return (
    <div className="CurrentWeather">
      <h1> {props.data.city}</h1>
      <div className="row">
        <div className="col-3">
          <WeatherIcon code={props.data.icon} size={80} />
        </div>
        <div className="col-5">
          <div className="CurrentWeather-todayTemperatureUnits">
            <span className="CurrentWeather-todayTemperature">
              {props.data.temperature}
            </span>
            <span className="CurrentWeather-units"> °C</span>
          </div>
        </div>
        <div className="col-4">
          <ul className="CurrentWeather-extraInfo">
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      <span className="CurrentWeather-time">
        Last Updated:
        <FormatDate date={props.data.date} />
      </span>
    </div>
  );
};

export default CurrentWeather;
