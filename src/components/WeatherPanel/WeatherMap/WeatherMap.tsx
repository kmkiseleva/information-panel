// Core
import { FC } from "react";

// Components
import { MapContainer, TileLayer } from "react-leaflet";

// Types
import { WeatherData } from "../../../typespaces/WeatherData";

// Styles
import "./weatherMap.scss";

type PropsType = {
  city: string;
  weatherData: WeatherData;
};

const WeatherMap: FC<PropsType> = ({ city, weatherData }) => {
  const { coord } = weatherData;
  const { lon, lat } = coord;

  return (
    <div className="weather-map-container">
      <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
