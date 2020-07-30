import { useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = 'https://us1.locationiq.com/v1/reverse.php';

export const useGetLocation = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0, address: {} });
  const [error, setError] = useState(null);

  const successHandler = ({ coords }) => {
    const cancelToken = axios.CancelToken.source();
    axios.get(BASE_URL, {
      cancelToken: cancelToken.token,
      params: { format: 'json', lat: coords.latitude, lon: coords.longitude, normalizeaddress: 1, key: process.env.REACT_APP_LOCATION_KEY }
    }).then(res => {
      setPosition({
        lat: coords.latitude,
        lng: coords.longitude,
        address: res.data.address
      });
    });
  };

  const errorHandler = error => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation might not be supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, { enableHighAccuracy: true });

    return () => {};
  }, []);

  return [position, error];
};
