import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(response) {
  let [city, setCity] = useState("null");
  let [message, setMessage] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
    console.log(event);
  }

  function getWeather(response) {
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let description = response.data.weather[0].description;
    setMessage(
      <div className="weather-description">
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>WindSpeed: {Math.round(response.data.wind.speed)}km/h</li>
          <li>
            <img src={icon} alt={description}></img>
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e285e913cd6f177ca8795431a5a72d10";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiURL);
    axios.get(apiURL).then(getWeather);
  }

  return (
    <div>
      <div className="SearchBar">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for city..."
            onChange={updateCity}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <div>{message}</div>
    </div>
  );
}

//When submiting a city name show weather information
