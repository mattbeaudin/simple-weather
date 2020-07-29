import React, { useState } from 'react';

import { useGetLocation } from './getLocation';
import { useFetchWeather } from './useFetchWeather';

const CurrentForecast = props => {
  const geoLocation = useGetLocation();
  const [params, setParams] = useState({ exclude: 'minutely,hourly,daily' });
  
  const { weather, loading, error } = useFetchWeather(params, geoLocation[0]);
  const date = new Date();

  if (weather.current == undefined || geoLocation[0].latitude == 0 || geoLocation[1] != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Please enable location services in your browser.</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card current-forecast" id="current">
      <h1>
        {date.getMonth()}/{date.getDate()}, {date.getFullYear()}
      </h1>
      <p className="weather-desc text-muted">
        {weather.current.weather[0].description}
      </p>
      <div className="weather-info">Temperature: {Math.round(weather.current.temp)}°f</div>
      <div className="weather-info">Feels Like: {Math.round(weather.current.feels_like)}°f</div>
      <div className="weather-info">Humidity: {Math.round(weather.current.humidity)}%</div>
      <div className="weather-info">Wind Speed: {Math.round(weather.current.wind_speed)} mph</div>
      <div className="weather-info">Visibility: {Math.round(weather.current.visibility / 1000)} miles</div>
    </div>
  );
};

export default CurrentForecast;