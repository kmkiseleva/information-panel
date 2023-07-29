// Core
import { makeAutoObservable } from "mobx";

class ExchangeRatesStore {
  rates: { [key: string]: number } = {};
  cryptocurrencies: { [key: string]: number } = {};

  constructor() {
    makeAutoObservable(this);
  }

  updateRates(rates: { [key: string]: number }) {
    this.rates = rates;
  }

  updateCryptocurrencies(cryptoData: { [key: string]: number }) {
    this.cryptocurrencies = cryptoData;
  }
}

const exchangeRatesStore = new ExchangeRatesStore();
export default exchangeRatesStore;
