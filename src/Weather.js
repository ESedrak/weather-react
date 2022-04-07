import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
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
      <div className="Weather">
        <div className="today-info">
          <div className="Search">
            <form onSubmit={showSearch}>
              <div className="row">
                <div className="col-8">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="City"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={showCityChange}
                  />
                </div>
                <div className="col-4">
                  <button className="btn btn-outline-light " type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <CurrentWeather data={weatherData} />
          </div>
        </div>
        <br />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <p>Loading, please wait</p>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="rgb(247, 206, 230)"
          size={40}
          animate={true}
        />
      </div>
    );
  }
}
