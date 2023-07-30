// Core
import { makeAutoObservable, runInAction } from "mobx";

// Api
import { fetchCityByIP } from "../data/dataService";

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
        this.city = response.city || "Moscow";
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
