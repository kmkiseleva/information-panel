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
import Currency from "./components/Currency/Currency";
import Loader from "./components/Loader/Loader";
import WeatherPanel from "./components/WeatherPanel/WeatherPanel";

// Stores
import exchangeRatesStore from "./store/ExchangeRatesStore";
import cityStore from "./store/CityStore";

// Styles
import "./App.css";

const App: FC = observer(() => {
  const { isLoading, fetchCity } = cityStore;

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
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <WeatherPanel />
          <Currency />
        </>
      )}
    </>
  );
});

export default App;
