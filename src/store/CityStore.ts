// Core
import { makeAutoObservable, runInAction } from "mobx";

// Api
import { fetchCityByIP, fetchCityWeather } from "../data/dataService";
import axios from "axios";

class CityStore {
  city: string;

  isLoading: boolean;

  constructor() {
    this.city = "";

    this.isLoading = false;

    makeAutoObservable(this);
  }

  fetchCity = async () => {
    try {
      this.isLoading = true;
      const response = await fetchCityByIP();

      runInAction(() => {
        this.city = response.data.city || "Moscow";
        this.isLoading = false;
      });
    } catch (error) {
      console.error("Error fetching city:", error);
      this.isLoading = false;
    }
  };
}

const cityStore = new CityStore();
export default cityStore;
