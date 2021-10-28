import React from "react";
import axios from "axios";

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
      <h1>I'm the weather app</h1>
      <p>Hello</p>
    </div>
  );
}
