// Core
import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

// Api
import {
  fetchExchangeRates,
  fetchCryptocurrencies,
  fetchCityWeather,
} from "./data/dataService";

// Components
import { List, Typography } from "antd";
import WeatherPanel from "./components/WeatherPanel/WeatherPanel";

// Stores
import exchangeRatesStore from "./store/ExchangeRatesStore";
import cityStore from "./store/CityStore";

// Styles
import "./App.css";

const App: FC = observer(() => {
  const { city, fetchCity } = cityStore;

  useEffect(() => {
    fetchCity();
  }, [fetchCity]);

  useEffect(() => {
    // fetchExchangeRates();
    fetchCryptocurrencies();

    const interval = setInterval(() => {
      // fetchExchangeRates();
      fetchCryptocurrencies();
    }, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, [city, fetchCity]);

  return (
    <>
      <div className="weather-panel">
        <WeatherPanel city={city} />
      </div>
      <div className="currency-container">
        <div className="exchange-rates">
          <Typography.Title level={2}>Exchange Rates:</Typography.Title>
          <List>
            {Object.entries(exchangeRatesStore.rates).map(
              ([currency, rate]) => (
                <List.Item key={rate}>
                  <Typography.Text>
                    {currency}: {rate}
                  </Typography.Text>
                </List.Item>
              )
            )}
          </List>
        </div>
        <div className="exchange-rates">
          <Typography.Title level={2}>Cryptocurrencies:</Typography.Title>
          <List>
            {Object.entries(exchangeRatesStore.cryptocurrencies).map(
              ([symbol, price]) => (
                <List.Item key={price}>
                  <Typography.Text>
                    {symbol}: ${price}
                  </Typography.Text>
                </List.Item>
              )
            )}
          </List>
        </div>
      </div>
    </>
  );
});

export default App;
