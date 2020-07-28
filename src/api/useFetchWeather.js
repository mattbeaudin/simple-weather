import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error'
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, weather: {} };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, weather: action.payload.weather };
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: false, error: action.payload.error, weather: {} };
    default:
      return state;
  }
}

export const useFetchWeather = (params, position) => {
  const [state, dispatch] = useReducer(reducer, { weather: {}, loading: true});

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios.get(BASE_URL, {
      cancelToken: cancelToken.token,
      params: { units: 'imperial', lat: position.latitude, lon: position.longitude, ...params, appid: process.env.REACT_APP_WEATHER_KEY }
    }).then(res => {
      console.log(res);
      dispatch({ type: ACTIONS.GET_DATA, payload: { weather: res.data }});
    }).catch(e => {
      if (axios.isCancel(e)) return;
      dispatch({ type: ACTIONS.ERROR, payload: { error: e }});
    });

    return () => {
      cancelToken.cancel();
    }
  }, [params, position]);

  return state;
};
