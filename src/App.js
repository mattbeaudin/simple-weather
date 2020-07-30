import React, { useEffect, useState } from 'react';
import halfmoon from 'halfmoon/js/halfmoon';
import ReactGA from 'react-ga';

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
    
    ReactGA.initialize('UA-91187449-5');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  let content = <div className="content">
                  <div className="content-title">Location Services Disabled</div>
                  <p>Please enable your location services in your browser.</p>
                </div>;

  if (geoLocation[0].lat !== 0 && geoLocation[1] == null) {
    content = <div>
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <h1 className="card-title">Weather for {geoLocation[0].address.city}, {geoLocation[0].address.state}</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <CurrentForecast current={weather.current} />
                  </div>
                  <div className="col-lg-8">
                    <DailyForecast daily={weather.daily} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <HourlyForecast hourly={weather.hourly} />
                  </div>
                </div>
              </div>;
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
