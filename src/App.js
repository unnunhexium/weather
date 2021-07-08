import { useState, useEffect } from "react";
import Now from "./components/Now/Now";
import Days from "./components/Days/Days";
import Diagram from "./components/Diagram/Diagram";
import CitySelector from "./components/CitySelector/CitySelector";
import "./App.scss";
import { fetchDataByCity } from "./apis/config";

export const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("London");

  useEffect(() => {
    fetchDataByCity(city).then((res) => {
      setData(res);
    });
  }, []);

  if (data.main) {
    return (
      <div className="app">
        <CitySelector className="app__cityselector"/>
        <Now temp={data.main.temp} name={data.name} />
        <Days />
        <Diagram />
        
      </div>
    );
  } else return <div className="app__loading">Loading...</div>;
}

export default App;
