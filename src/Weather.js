import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function showTemperature(response) {
    alert(
      `Hello the weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=f3e9b7fb8cbac59f9b2f8b3d635b8d32&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  return (
    <div className="Weather">
      <h1>This is the weather app</h1>
      <p>Hello</p>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
