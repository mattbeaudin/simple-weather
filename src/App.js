import React, { useEffect, useState } from 'react';
import halfmoon from 'halfmoon/js/halfmoon';

import { useGetLocation } from './api/getLocation';
import { useFetchWeather } from './api/useFetchWeather';

import UpperNavBar from './UpperNavBar';
import CurrentForecast from './api/CurrentForecast';
import HourlyForecast from './api/HourlyForecast';
import DailyForecast from './api/DailyForecast';

const App = props => {
  const geoLocation = useGetLocation();
  const [params, setParams] = useState({ exclude: 'minutely' });
  
  const { weather, loading, error } = useFetchWeather(params, geoLocation[0]);

  useEffect(() => {
    halfmoon.onDOMContentLoaded();
    halfmoon.toggleDarkMode();
  }, []);

  let content = <div>
                  <div className="row">
                    <div className="col-md-4">
                      <CurrentForecast current={weather.current} />
                    </div>
                    <div className="col-md-8">
                      <DailyForecast daily={weather.daily} />
                    </div>
                  </div>
                  <div className="row">
                    <HourlyForecast hourly={weather.hourly} />
                  </div>
                </div>;

  if (geoLocation[0].latitude == 0 || geoLocation[1] != null) {
    content = <div className="content">
                <div className="content-title">Location Services Disabled</div>
                <p>Please enable your location services in your browser.</p>
              </div>
  }

  if (loading) {
    content = <div className="content">
                <div className="content-title">Loading weather data...</div>
              </div>
  }

  return (
    <div className="page-wrapper with-navbar">
      <UpperNavBar />
      <div className="content-wrapper">
      <div className="container-fluid">
        {content}
      </div>
      </div>
    </div>
  );
}

export default App;
