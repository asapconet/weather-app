import React, { useContext } from "react";
import { WiSunrise, WiSunset, WiDaySunny, WiMoonrise } from "react-icons/wi";
import { motion } from "framer-motion";
import none from "../assets/images/na.png";
import { IoPartlySunnySharp, IoWater } from "react-icons/io5";
import { BsWind } from "react-icons/bs";
import { WeatherContextType } from "../types/contextTypes";
import WeatherContext from "../components/context/ContextApi";
import { MainAppLayout } from "../layouts/mainApp";
import { Navbar } from "../components/Navbar";
import { daysData7, otherCities } from "../data/forcastData";
import { fullDayFormat, timeFormatter } from "../utils/dateTimeFormater";
import { weatherIcons } from "../components/formattedIcons";

function WeatherMain() {
  const weatherContext = useContext<WeatherContextType>(WeatherContext);
  const {
    temp,
    country,
    description: weatherType,
    icon,
    name,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    dt,
    humidity,
    feels_like,
    speed,
  } = weatherContext?.cityData || {};

  const high = Math.round(temp_max - 273);
  const low = Math.round(temp_min - 300);
  const temps = Math.round(temp - 273);
  const feel = Math.round(feels_like - 273);

  return (
    <MainAppLayout>
      <Navbar />

      <div className="flex flex-col gap-2 items-center justify-center mt-12 max-h-[305px]">
        <p className="font-[600] capitalize">{weatherType}</p>
        <div className="">
          <img src={`${weatherIcons[icon] || none} `} alt="weather icon" />
        </div>

        <motion.h3
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {`${name ?? "no"} ${country ?? "city found"}`}
        </motion.h3>
        <p className="flex text-[6rem] font-bold p-0">
          {temps}
          <span className="text-[1rem] font-bold mt-6">0</span>
        </p>
        <p className="">{fullDayFormat(dt)}</p>
      </div>
      <div className="flex justify-center mt-12">
        <div
          className="flex items-center justify-between h-[95px] max-w-[80%] w-full 
        rounded bg-white/30 p-2"
        >
          <div className="flex flex-col justify-center items-center">
            <WiMoonrise size={32} />
            <p className="font-[500]">{feel}%</p>
            <p className="text-[.8rem] font-[500]">Feels Like</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoWater size={22} className="text-blue-400" />
            <p className="font-[500]">{humidity}%</p>
            <p className="text-[.8rem] font-[500]">Humidity</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BsWind size={22} />
            <p className="font-[500]">{speed}km/h</p>
            <p className="text-[.8rem] font-[500]">Wind Speed</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start sm:justify-center">
        <motion.div
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <div className="flex justify-start">
            <div className="min-w-[398px] w-full ">
              <div className="">
                <div className="flex justify-between items-center mb-2 mt-6">
                  {" "}
                  <p className="text-[.8rem] font-[700]">More Info</p>
                  <p className="hidden">+</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:overflow-x-auto">
                  {otherCities.map((el, idx) => (
                    <div
                      key={idx}
                      className="max-w-[195px] min-w-[185px] h-[50px] bg-white/30 rounded p-2 mr-2"
                    >
                      <div className="flex gap-2 items-center">
                        {el.city === "Sunrise" ? (
                          <WiSunrise size={24} />
                        ) : el.city === "Sunset" ? (
                          <WiSunset size={24} />
                        ) : el.city === "Sunny" ? (
                          <WiDaySunny size={24} />
                        ) : (
                          <WiDaySunny size={24} />
                        )}
                        <div className="w-[50%] text-left">
                          <p className="font-[700] text-[.9rem]">{el.city}</p>
                          <p className="font-[700] text-[.7rem]">
                            {el.city === "Sunrise" ? (
                              <>{timeFormatter(sunrise)} </>
                            ) : el.city === "Sunset" ? (
                              <>{timeFormatter(sunset)} </>
                            ) : null}
                          </p>
                        </div>

                        <p className="flex sm:items-center text-[.8rem] font-bold p-0">
                          {el.city === "High" ? (
                            <>{high} </>
                          ) : el.city === "Low" ? (
                            <>{low} </>
                          ) : null}
                          <span className="text-[.5rem] font-bold mt-">
                            {el.degree && 0}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-start  sm:justify-center pb-6">
        <div className="min-w-[398px] w-full ">
          <div className="">
            <div className="flex justify-between items-center mb-2 mt-6">
              {" "}
              <p className="text-[.8rem] font-[700]">Today</p>
              <p className="text-[.8rem] font-[700]">7-Day Forecasts</p>
            </div>
            <div className="flex gap-2">
              {daysData7.map((el, idx) => (
                <div
                  key={idx}
                  className="max-w-[58px] w-full h-[99px] bg-white/30 rounded p-2"
                >
                  <div
                    className="flex flex-col gap-2 items-center
               "
                  >
                    <p className="font-[700] text-[.6rem]">{el.time}</p>
                    <IoPartlySunnySharp size={28} />
                    <p className="flex items-star text-[.8rem] font-bold p-0">
                      {el.temperature}
                      <span className="text-[.5rem] font-bold mt-">
                        {el.degree && 0}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainAppLayout>
  );
}

export default WeatherMain;
