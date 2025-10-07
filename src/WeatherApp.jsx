import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "Indore",
    feelsLike: 22.11,
    humidity: 86,
    temp: 21.64,
    tempMax: 21.64,
    tempMin: 21.64,
    weather: "moderate rain",
  });

  let updateWeatherData = (newInfo) => {
    setWeatherData(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateWeatherData={updateWeatherData} />
      <InfoBox weatherData={weatherData} />
    </div>
  );
}
