import React, { useState } from 'react';
import { useGetLocation } from './getLocation';
import { useFetchWeather } from './useFetchWeather';
import { Container, Col, Row } from 'reactstrap';

const CurrentWeather = props => {
  const geoLocation = useGetLocation();
  const [params, setParams] = useState({ exclude: 'minutely,hourly,daily' });
  
  const { weather, loading, error } = useFetchWeather(params, geoLocation[0]);

  if (weather.current == undefined || geoLocation[0].latitude == 0 || geoLocation[1] != null) {
    return (
      <Container>
        <Row>
          <Col md="6">
          <h1>Please enable location services in your browser.</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col md="6">
          <h1>Current Weather</h1>
          <p>Here's what your weather looks like right now.</p>
          <div>
            <h2>Temperature: {weather.current.temp} °f</h2>
            <h2>Feels Like: {weather.current.feels_like} °f</h2>
            <h2>Humidity: {weather.current.humidity}%</h2>
            <h2>Wind Speed: {weather.current.wind_speed} mph</h2>
            <h2>Visibility: {weather.current.visibility / 1000} miles</h2>
            <h2>Weather: {weather.current.weather[0].main}</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;