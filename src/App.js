import React, { useEffect } from 'react';
import halfmoon from 'halfmoon/js/halfmoon';

import UpperNavBar from './UpperNavBar';
import CurrentForecast from './api/CurrentForecast';
import HourlyForecast from './api/HourlyForecast';
import DailyForecast from './api/DailyForecast';

const App = props => {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
    halfmoon.toggleDarkMode();
  }, []);

  return (
    <div className="page-wrapper with-navbar">
      <UpperNavBar />
      <div className="content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <CurrentForecast />
          </div>
          <div className="col-md-8">
            <DailyForecast />
          </div>
        </div>
        <div className="row">
          <HourlyForecast />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
