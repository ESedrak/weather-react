import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "2fe015e63630ed57d2ca7047e4ab4479";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showForecast);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="Forecast-day">Day</div>
          <WeatherIcon code="01d" size={40} />
          <div className="Forecast-temperatures">
            <span className="Forecast-temperature-min">Min°C</span>
            <span className="Forecast-temperature-max">Max°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
