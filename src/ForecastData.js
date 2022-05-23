import React from "react";
import WeatherIcon from "./WeatherIcon";

const ForecastData = (props) => {
  const minTemperature = () => {
    const minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  };
  const maxTemperature = () => {
    const maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  };

  const day = () => {
    const date = new Date(props.data.dt * 1000);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[date.getDay()];

    return day;
  };

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-min">{minTemperature()} </span>
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
      </div>
    </div>
  );
};

export default ForecastData;
