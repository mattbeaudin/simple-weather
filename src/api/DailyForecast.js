import React, { useState } from 'react';

const DailyForecast = ({ daily }) => {
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="card daily-forecast" id="daily">
      <h1 className="card-title">7 Day Forecast</h1>
      <div className="row">
        {daily.slice(0, 7).map(forecast => {
          const dt = new Date(forecast.dt * 1000);
          return(
            <div key={forecast.dt} className="col-xs-1">
              <div className="content">
                <h4 className="content-title">{days[dt.getDay()]}</h4>
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