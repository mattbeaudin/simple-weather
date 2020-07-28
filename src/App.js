import React, { useEffect } from 'react';
import UpperNavBar from './UpperNavBar';
import CurrentWeather from './api/CurrentWeather';

const App = props => {
  return (
    <main className="App">
      <UpperNavBar />
      <CurrentWeather />
    </main>
  );
}

export default App;
