/*=== REACT HOOKS AND OTHERS ===*/
import React, { useEffect, useState } from "react";
/*=== CUSTOM COMPONENTS ===*/
import { fetchWeatherData } from "../utils/apiHelper";
/*=== MUI ICONS ===*/
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";

const Weather = ({ lat, lon }) => {
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
    <div className="weather-container">
      <div className="weather-element temperaure">
        <ThermostatIcon className="mui-icon temperature-icon" /> {temperature}°C
      </div>
      <div className="weather-element wind">
        <AirIcon className="mui-icon wind-icon" /> {windspeed} km/h
      </div>
    </div>
  );
};

export default Weather;
