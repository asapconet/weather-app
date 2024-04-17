import { WeatherContextType } from "@/types/contextTypes";
import React, { createContext } from "react";

const WeatherContext = createContext<WeatherContextType>({
  onAddCity: (city) => {},
  cityData: {},
  city: "",
  loading: true,
  setError: "",
  temp: 0,
  country: "",
  description: "",
  icon: "",
  name: "",
  sunrise: 0,
  sunset: 0,
  temp_max: 0,
  temp_min: 0,
  dt: 0,
  speed: 0,
  humidity: 0,
  feels_like: 0,
});

export default WeatherContext;
