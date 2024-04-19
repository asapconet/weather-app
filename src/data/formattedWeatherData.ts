import { useFetchWeather } from "@/api/dataFetch";

export const useFormattedWeatherData = (city: string) => {
  const { data, isLoading, isError } = useFetchWeather(city);
  

  const formatCollectedData = (data: any) => {
    if (!data) {
      throw new Error("Data is undefined");
    }

    const {
      main: {
        temp,
        temp_min,
        temp_max,
        feels_like,
        sea_level,
        grnd_level: ground_level,
        pressure,
        humidity,
      },
      weather,
      visibility,
      dt,
      sys: { country, sunrise, sunset },
      timezone,
      name,
      wind: { speed, deg },
    } = data;

    const { main: weatherMain, description, icon } = weather[0];

    return {
      ground_level,
      sea_level,
      temp,
      feels_like,
      pressure,
      humidity,
      visibility,
      dt,
      country,
      sunrise,
      sunset,
      timezone,
      name,
      main: weatherMain,
      description,
      icon,
      temp_max,
      temp_min,
      speed,
      deg,
    };
  };

  const formattedData = formatCollectedData(data);

  return formattedData;
};