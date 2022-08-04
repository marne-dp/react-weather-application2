import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Zagreb, Croatia",
    date: "Thursday, 7 July 2022 10:07",
    temperature: 31,
    humidity: "41%",
    windSpeed: "5",
    description: "Clear skies",
    feelsLike: "27",
    imgURL: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Search city"
              autofocus="on"
              autocomplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search!"
              className="form-control btn btn-primary w-100"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-warning w-100">Current</button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1 className="location">{weatherData.city}</h1>
        </div>
        <div className="col-3">
          <div className="clearfix weather-temperature">
            <span className="current-temp">{weatherData.temperature}</span>
            <span className="units">
              <a href="/">°C</a> | <a href="/"> °F</a>
            </span>
          </div>
        </div>
        <div className="col-3">
          <img src={weatherData.imgURL} alt="Weather img" />
        </div>
      </div>

      <div className="current-conditions">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weatherData.date}</li>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind Speed: {weatherData.windSpeed} km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <div>
              <h2>{weatherData.description}</h2>
            </div>
            <ul>
              <li>Feels Like: {weatherData.feelsLike} °C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
