import React from 'react';

const HourlyForecast = ({ hourly }) => {
  const date = new Date();

  return (
    <div className="card hourly-forecast" id="hourly">
      <h1 className="card-title">Hourly Forecast</h1>
      <div className="row">
        {hourly.slice(0, 18).map(forecast => {
          const dt = new Date(forecast.dt * 1000);
          let ampm = dt.getHours() >= 12 ? ' pm' : ' am';
          dt.setHours(dt.getHours() % 12);
          let hour = dt.getHours() ? dt.getHours() : 12;
          return(
            <div key={forecast.dt} className="col-xs-1">
              <div className="content">
                <h4 className="content-title">{hour + ampm}</h4>
                <div className="weather-info text-muted">{forecast.weather[0].main}</div>
                <div className="weather-info">Temperature: {Math.round(forecast.temp)}°f</div>
                <div className="weather-info">Humidity: {Math.round(forecast.humidity)}%</div>
                <div className="weather-info">Wind: {Math.round(forecast.wind_speed)} mph</div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default HourlyForecast;