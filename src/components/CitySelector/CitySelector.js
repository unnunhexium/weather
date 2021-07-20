import { useState } from "react";
import "./CitySelector.scss";

const CitySelector = (props) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const showInput = () => {
    setOpen(!open);
  };

  const onKeyUp = (event) => {
    if (event.key === "Enter") {
      searchForWeather(value);
      showInput();
    }
  };

  const searchForWeather = () => {
    props.fetchWeather(value);
  };
  return (
    <div className="city-selector">
      <button
        className={`city-selector__search ${
          !open ? "city-selector__search--open" : ""
        }`}
        onClick={showInput}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          alt="search icon"
        />
      </button>
      <div
        className={`city-selector__input-wrapper ${
          open ? "city-selector__input-wrapper--open" : ""
        }`}
      >
        <input
          className="city-selector__input"
          placeholder="Enter city"
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={(event) => onKeyUp(event)}
          value={value}
        />

        <button onClick={searchForWeather} className="city-selector__button">
          Check weather!
        </button>
      </div>
    </div>
  );
};

export default CitySelector;
