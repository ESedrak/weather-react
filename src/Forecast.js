import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastData from "./ForecastData";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState("");

  function showForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2">
            <ForecastData data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "2fe015e63630ed57d2ca7047e4ab4479";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
