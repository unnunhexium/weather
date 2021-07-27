import axios from "axios";

export const API_KEY = ["c1e8ea507e68835a0a3aebf5f8116c80"];
export const API_BASE_URL = "http://api.openweathermap.org/";

export const fetchDataByCity = async (city) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      API_KEY
  );

  return response.data;
};

export const fetchDataByCoords = async (latitude, longtitude) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${API_KEY}`
  );
  return response.data;
};

export const getForecastByCity = async (city) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      API_KEY
  );

  return response.data;
};

export const getForecastByCoords = async (latitude, longtitude) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longtitude}&appid=${API_KEY}`
  );
  return response.data;
};
