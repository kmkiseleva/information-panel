// Core
import { useEffect, useState } from "react";
import axios from "axios";

// Stores
import cityStore from "../../store/CityStore";

// Components
import { Card } from "antd";

// Styles
import "./weatherPanel.css";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherPanel = () => {
  const { city } = cityStore;
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (city) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      axios.get(API_URL).then((response) => {
        setWeatherData(response.data);
      });
    }
  }, [city]);

  return (
    <div className="weather-panel">
      <Card className="weather-panel-container">
        {(!city || !weatherData) && <div>No data...</div>}
        {city && weatherData && (
          <>
            <div className="weather-panel-title">{city}</div>
            <div className="weather-panel-info">
              <p>Temperature: {weatherData.main.temp} °C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Humidity: {weatherData.main.humidity} %</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default WeatherPanel;
