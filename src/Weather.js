import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity); /*default is Sydney */

  const showWeather = (response) => {
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
  };

  // purpose of this function is to call the API
  const searchWeather = () => {
    let apiKey = "2fe015e63630ed57d2ca7047e4ab4479";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  };

  const showSearch = (event) => {
    event.preventDefault();
    searchWeather();
  };

  // value of the search bar
  const showCityChange = (event) => {
    setCity(event.target.value);
  };

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Weather-todayInfo">
          <form onSubmit={showSearch}>
            <div className="Weather-row row">
              <div className="Weather-col col-8">
                <input
                  className="Weather-form form-control mw-100"
                  type="search"
                  placeholder="City"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={showCityChange}
                />
              </div>
              <div className="Weather-col col-4 ">
                <button
                  className=" Weather-btn btn btn-outline-light "
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <CurrentWeather data={weatherData} />
        </div>
        <br />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchWeather();
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
};

export default Weather;
