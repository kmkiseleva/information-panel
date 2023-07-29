// Core
import { FC, useEffect, useState } from "react";
import axios from "axios";

// Components
import { Card } from "antd";

// Styles
import "./weatherPanel.css";

interface WeatherPanelProps {
  city: string;
}

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

const WeatherPanel: FC<WeatherPanelProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    axios.get(API_URL).then((response) => {
      setWeatherData(response.data);
    });
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { temp, humidity } = weatherData.main;
  const weatherDescription = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed;

  return (
    <Card className="weather-panel-container">
      <div className="weather-panel-title">{city}</div>
      <div className="weather-panel-info">
        <p>Temperature: {temp} °C</p>
        <p>Weather: {weatherDescription}</p>
        <p>Humidity: {humidity} %</p>
        <p>Wind Speed: {windSpeed} m/s</p>
      </div>
    </Card>
  );
};

export default WeatherPanel;
