import React from 'react';

const HourlyForecast = ({ hourly }) => {
  return (
    <div className="card hourly-forecast" id="hourly">
      <h1 className="card-title">Hourly Forecast</h1>
      <div className="forecast-container">
        {hourly.slice(0, 18).map(forecast => {
          const dt = new Date(forecast.dt * 1000);
          let ampm = dt.getHours() >= 12 ? ' pm' : ' am';
          dt.setHours(dt.getHours() % 12);
          let hour = dt.getHours() ? dt.getHours() : 12;
          return(
            <div key={forecast.dt} className="forecast">
              <div className="content">
                <h4 className="content-title">{hour + ampm}</h4>
                <div className="weather-info text-muted">{forecast.weather[0].main}</div>
                <div className="weather-info"><i className="fa fa-thermometer-full" aria-label="temperature"></i>{Math.round(forecast.temp)}&deg;</div>
                <div className="weather-info"><i className="fa fa-tint" aria-label="humidity"></i> {Math.round(forecast.humidity)}%</div>
                <div className="weather-info"><i className="fa fa-flag" aria-label="wind speed"></i> {Math.round(forecast.wind_speed)} mph</div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default HourlyForecast;