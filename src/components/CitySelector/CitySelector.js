import React, { useState, useEffect } from "react";
import "./CitySelector.scss";
//import { API_KEY, API_BASE_URL } from "../../apis/config";

const CitySelector = () => {
  const [city, setCity] = useState("");

  // const onSearch = () => {
  //   console.log(
  //     `${API_BASE_URL}data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  //   );
  //   fetch(
  //     `${API_BASE_URL}data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => console.log(result));
  // };

  return (
    <div className="city-selector">
      <input
        className="city-selector__input"
        placeholder="Enter city"
        onChange={(event) => setCity(event.target.value)}
        value={city}
      />{" "}
      {city}
      {
        <button
          className="city-selector__button"
          //onClick={() => onSearch(city)}
        >
          Check weather!
        </button>
      }
    </div>
  );
};

export default CitySelector;

//https://dev.to/hulyakarakaya/create-a-weather-app-with-react-hooks-part-1-4055
