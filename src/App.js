import { useState, useEffect } from "react";
import Now from "./components/Now/Now";
import Days from "./components/Days/Days";
import Diagram from "./components/Diagram/Diagram";
import CitySelector from "./components/CitySelector/CitySelector";
import "./App.scss";
import {
  fetchDataByCity,
  fetchDataByCoords,
  getForecastByCoords,
  getForecastByCity,
  getHourlyByCoords
} from "./apis/config";

export const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

function App() {
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const getPosition = async () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  };

  const fetchWeatherByCity = (city) => {
    fetchDataByCity(city).then((res) => {
      setData(res);
    });
  };

  const getForecastByCity = (city) => {
    getForecastByCity(city).then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    getPosition();
    if (latitude) {
      fetchDataByCoords(latitude, longitude).then((res) => {
        setData(res);
      });
      getForecastByCoords(latitude, longitude).then((res) => {
        setForecast(res);
      });
    }
  }, [latitude]);

  if (data.main) {
    return (
      <div className="app">
        <CitySelector
          fetchWeather={fetchWeatherByCity}
          className="app__cityselector"
        />
        <Now
          main={data.weather[0].main}
          temp={data.main.temp}
          name={data.name}
        />
        <Days forecast={forecast} className="app__days" />
        <Diagram />
      </div>
    );
  } else return <div className="app__loading">Loading...</div>;
}

export default App;
