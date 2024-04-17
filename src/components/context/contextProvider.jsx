import React, { useState, useEffect } from "react";
import Weathercontext from "./Contextapi";
import fetchFomattedData from "../API/apiFetchFormat";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContextProvider = (props) => {
  const { children } = props;
  const [CurrentCity, setCurrentCity] = useState("abuja");
  const [collectedData, SetCollectedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const data = await fetchFomattedData(CurrentCity);
        SetCollectedData(data);
        setLoading(false);
      } catch (error) {
        if (error) {
          SetCollectedData({});
          toast.error(`city not found try again😒`, {
            style: {
              width: "200px",
              lineHeightStep: "20px",
              backgroundColor: "#141414",
              fontSize: "15px",
              borderRadius: "6px",
              lineHeight: "20px",
              height: "10px",
              padding: "0",
              margin: "0",
            },
            transition: Flip,
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
          });
          setLoading(false);
        }
      }
    }, 500);
    return () => clearTimeout();
  }, [CurrentCity]);

  //initial approach to error handling rewritten in a better way above👆
  // setTimeout(async () => {
  //   const data =
  //     (await fetchFomattedData(CurrentCity).catch((err) => {
  //       if (err) {
  //         toast.error(`city not found try again😒`, {
  //           style: {
  //             width: "200px",
  //             lineHeightStep: "20px",
  //             backgroundColor: "#141414",
  //             fontSize: "15px",
  //             borderRadius: "6px",
  //             lineHeight: "20px",
  //             height: "10px",
  //             padding: "0",
  //             margin: "0",
  //           },
  //           position: toast.POSITION.TOP_LEFT,
  //           autoClose: 1000,
  //         });
  //       }
  //     })) ?? {};
  //   SetCollectedData(data);
  //   setLoading(false);
  // }, 1000);

  const Addcityfunction = (citySelected) => {
    const current = citySelected.toString();
    setCurrentCity(current);
  };

  const weatherData = {
    onAddCity: Addcityfunction,
    cityData: collectedData,
    loading: loading,
    city: CurrentCity,
  };

  return (
    <Weathercontext.Provider value={weatherData}>
      {children}
    </Weathercontext.Provider>
  );
};

export default ContextProvider;
