import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastData(props) {
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-min">{minTemperature()} </span>
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
      </div>
    </div>
  );
}
