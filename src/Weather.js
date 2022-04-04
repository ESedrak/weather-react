import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
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

  function search() {
    let apiKey = "2fe015e63630ed57d2ca7047e4ab4479";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showSearch(event) {
    event.preventDefault();
    search();
  }

  function showCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <nav className="navbar nav-bar-dark">
          <form className="d-flex" onSubmit={showSearch}>
            <input
              className="form-control me-2 w-100"
              type="search"
              placeholder="City"
              autoComplete="off"
              autoFocus="on"
              onChange={showCityChange}
            />
            <button className="btn btn-outline-light " type="submit">
              Search
            </button>
            <button type="button" className="btn btn-dark current-location">
              Current
            </button>
          </form>
        </nav>
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();
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
