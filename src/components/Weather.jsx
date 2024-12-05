// src/components/Weather.js

import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../utils/apiHelper";

const Weather = ({ lat, lon, municipalityName }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      fetchWeatherData(lat, lon).then((data) => setWeatherData(data));
    }
  }, [lat, lon]);

  if (!lat || !lon) {
    return <div>Location data is not available for weather.</div>;
  }

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const { temperature, windspeed } = weatherData.current_weather;

  return (
    <div className="weather">
      <p>
        <strong>Temperature:</strong> {temperature}°C
      </p>
      <p>
        <strong>Windspeed:</strong> {windspeed} km/h
      </p>
    </div>
  );
};

export default Weather;
