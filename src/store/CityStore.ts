// Core
import { makeAutoObservable, runInAction } from "mobx";

// Api
import { fetchCityByIP, fetchCityWeather } from "../data/dataService";
import axios from "axios";

class CityStore {
  city: string;

  isLoading: boolean;

  constructor() {
    this.city = "Moscow";

    this.isLoading = false;

    makeAutoObservable(this);
  }

  fetchCity = async () => {
    try {
      const response = await fetchCityByIP();
      fetchCityWeather(response.data.city);

      runInAction(() => {
        this.city = response.data.city;
      });
    } catch (error) {
      console.error("Error fetching city:", error);
    }
  };
}

const cityStore = new CityStore();
export default cityStore;
