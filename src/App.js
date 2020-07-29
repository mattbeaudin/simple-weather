import React, { useEffect } from 'react';
import UpperNavBar from './UpperNavBar';
import CurrentWeather from './api/CurrentWeather';
import halfmoon from 'halfmoon/js/halfmoon';

const App = props => {
  halfmoon.toggleDarkMode();
  halfmoon.onDOMContentLoaded();

  return (
    <div className="page-wrapper with-navbar">
      <UpperNavBar />
      <div className="content-wrapper">
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
