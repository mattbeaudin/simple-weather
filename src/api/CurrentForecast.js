import React, { useState } from 'react';

const CurrentForecast = ({ current }) => {
  const date = new Date();

  return (
    <div className="card current-forecast" id="current">
      <h1>
        {date.getMonth()}/{date.getDate()}, {date.getFullYear()}
      </h1>
      <p className="weather-desc text-muted">
        {current.weather[0].description}
      </p>
      <div className="weather-info">Temperature: {Math.round(current.temp)}°f</div>
      <div className="weather-info">Feels Like: {Math.round(current.feels_like)}°f</div>
      <div className="weather-info">Humidity: {Math.round(current.humidity)}%</div>
      <div className="weather-info">Wind Speed: {Math.round(current.wind_speed)} mph</div>
      <div className="weather-info">Visibility: {Math.round(current.visibility / 1000)} miles</div>
    </div>
  );
};

export default CurrentForecast;