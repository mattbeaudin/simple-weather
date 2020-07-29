import React, { useState } from 'react';

import { useGetLocation } from './getLocation';
import { useFetchWeather } from './useFetchWeather';

const DailyForecast = props => {
  const geoLocation = useGetLocation();
  const [params, setParams] = useState({ exclude: 'minutely,current,hourly' });
  
  const { weather, loading, error } = useFetchWeather(params, geoLocation[0]);
  const date = new Date();

  if (loading || geoLocation[0].latitude == 0 || geoLocation[1] != null) {
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
    <div className="card daily-forecast" id="daily">
      <h1 className="card-title">7 Day Forecast</h1>
      <div className="row">
        {weather.daily.slice(0, 7).map(forecast => {
          const dt = new Date(forecast.dt * 1000);
          return(
            <div key={forecast.dt} className="col-xs-1">
              <div className="content">
                <h4 className="content-title">{dt.getDate()}</h4>
                <div className="text-muted">{forecast.weather[0].main}</div>
                <div className="weather-info">Min: {Math.round(forecast.temp.min)}°f</div>
                <div className="weather-info">Max: {Math.round(forecast.temp.max)}°f</div>
                <div className="weather-info">Humidity: {Math.round(forecast.humidity)}%</div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default DailyForecast;