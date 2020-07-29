import React, { useState } from 'react';
import { useGetLocation } from './getLocation';
import { useFetchWeather } from './useFetchWeather';

const CurrentWeather = props => {
  const geoLocation = useGetLocation();
  const [params, setParams] = useState({ exclude: 'minutely,hourly,daily' });
  
  const { weather, loading, error } = useFetchWeather(params, geoLocation[0]);
  const date = new Date(new Date().toLocaleString('en-US', {
    timeZone: weather.timezone
  }));

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
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Current Weather</h1>
          <p>Here's what your weather looks like right now.</p>
          
          <div className="card">
            <h2 className="card-title">
              {date.getUTCMonth()}/{date.getUTCDate()}, {date.getUTCFullYear()}
            </h2>
            <p className="weather-desc text-muted">
              {weather.current.weather[0].description}
            </p>
            <div className="weather-info">Temperature: {weather.current.temp}°f</div>
            <div className="weather-info">Feels Like: {weather.current.feels_like}°f</div>
            <div className="weather-info">Humidity: {weather.current.humidity}%</div>
            <div className="weather-info">Wind Speed: {weather.current.wind_speed} mph</div>
            <div className="weather-info">Visibility: {weather.current.visibility / 1000} miles</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;