import React, { useState, useEffect } from "react";
import WeatherContext from "./ContextApi";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchFormattedData from "../../api/dataFetch";
import { WeatherContextType } from "../../types/contextTypes";

const ContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  const [currentCity, setCurrentCity] = useState("abuja");
  const [collectedData, setCollectedData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchFormattedData(currentCity);
        setCollectedData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        if (error) {
          setCollectedData({});
          toast.error(`City not found, please try again.`, {
            style: {
              width: "200px",
              lineHeightStep: "20px",
              backgroundColor: "blue",
              fontSize: ".5rem",
              borderRadius: "2px",
              lineHeight: "20px",
              height: "10px",
              padding: "0",
              margin: "0",
            },
            transition: Flip,
            // position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
          });
          setLoading(false);
        }
      }
    };
    const timeoutId = setTimeout(fetchData, 500);
    return () => clearTimeout(timeoutId);
  }, [currentCity]);

  const AddCityFunction = (citySelected: string) => {
    setCurrentCity(citySelected.toString());
  };

  const weatherData: Pick<
    WeatherContextType,
    "onAddCity" | "cityData" | "loading" | "city"
  > = {
    onAddCity: AddCityFunction,
    cityData: collectedData,
    loading: loading,
    city: currentCity,
  };

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};

export default ContextProvider;
