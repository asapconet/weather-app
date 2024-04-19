import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const CITY_API_URL = process.env.REACT_APP_API_CITY;

const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${API_URL}&q=${city}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const fetchCityData = async (city: string) => {
  try {
    const response = await axios.get(`${CITY_API_URL}&q=${city}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching city data:", error);
    throw error;
  }
};

export const useFetchWeather = (city: string) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
  });
};

export const useFetchCities = (city: string) => {
  return useQuery({
    queryKey: ["cities", city],
    queryFn: () => fetchCityData(city),
  });
};
