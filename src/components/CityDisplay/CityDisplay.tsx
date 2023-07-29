import React from "react";
import { observer } from "mobx-react-lite";
import cityStore from "../../store/CityStore";

const CityDisplay: React.FC = observer(() => {
  const { city } = cityStore;

  if (cityStore.isLoading) {
    return <div>Loading...</div>;
  }

  return <div>City: {city}</div>;
});

export default CityDisplay;
