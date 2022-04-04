import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/028/896/original/StockWeatherImage.png?1646862957",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <nav className="navbar nav-bar-dark">
          <form className="d-flex">
            <input
              className="form-control me-2 w-100"
              type="search"
              placeholder="City"
              autoComplete="off"
              autoFocus="on"
            />
            <button className="btn btn-outline-light " type="submit">
              Search
            </button>
            <button type="button" className="btn btn-dark current-location">
              Current
            </button>
          </form>
        </nav>
        <div className="Today">
          <h1> {weatherData.city}</h1>
          <div className="row">
            <div className="col-3">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="weather-icon"
              />
            </div>
            <div className="col-5 today-temperature-units">
              <span className="today-temperature">
                {weatherData.temperature}
              </span>
              <span className="units"> °C </span>
            </div>
            <div className="col-4">
              <ul className="extra-info">
                <li>{weatherData.description}</li>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <span className="last-updated-time">
            Last Updated:
            <FormatDate date={weatherData.date} />
          </span>
        </div>
      </div>
    );
  } else {
    let apiKey = "2fe015e63630ed57d2ca7047e4ab4479";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return (
      <div>
        <p>Loading....</p>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="white"
          size={40}
          animate={true}
        />
      </div>
    );
  }
}
