import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `This is a test to show the weather temperature (${Math.round(
        response.data.main.temp
      )} degrees celsius) in ${props.city}`
    );
  }
  let apiKey = "2fe015e63630ed57d2ca7047e4ab4479";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
  return (
    <div>
      <h3>Testing App</h3>
    </div>
  );
}
