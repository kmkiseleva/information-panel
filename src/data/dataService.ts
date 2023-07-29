// Core
import axios from "axios";

// Stores
import exchangeRatesStore from "../store/ExchangeRatesStore";

const EXCHANGE_RATES_API = "https://api.exchangeratesapi.io/latest";
const CRYPTO_API = "https://api.coincap.io/v2/assets";

async function fetchCityByIP() {
  try {
    const response = await axios.get("https://ipapi.co/json/");
    return response.data;
  } catch (error) {
    console.error("Error fetching city:", error);
  }
}

async function fetchCityWeather(city: string) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching city:", error);
  }
}

async function fetchExchangeRates() {
  try {
    const response = await axios.get(
      `${EXCHANGE_RATES_API}?access_key=${process.env.REACT_APP_EXCHANGE_RATES_API_KEY}`
    );
    const data = response.data;
    exchangeRatesStore.updateRates(data.rates);
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

async function fetchCryptocurrencies() {
  try {
    const response = await axios.get(CRYPTO_API);
    const data = response.data;
    const cryptoData = data.data.reduce(
      (result: { [key: string]: number }, crypto: any) => {
        result[crypto.symbol] = parseFloat(crypto.priceUsd);
        return result;
      },
      {}
    );
    exchangeRatesStore.updateCryptocurrencies(cryptoData);
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
  }
}

export {
  fetchExchangeRates,
  fetchCityByIP,
  fetchCityWeather,
  fetchCryptocurrencies,
};
