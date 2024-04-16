import React from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { MainAppLayout } from "./layouts/mainApp";
import { CloudSunIcon } from "./assets/icons";
import { IoPartlySunnySharp, IoUmbrella, IoWater } from "react-icons/io5";
import { BsWind } from "react-icons/bs";
import { daysData7, otherCities } from "./data/forcastData";

function App() {
  return (
    <MainAppLayout>
      <Navbar />
      <div className="flex flex-col gap-2 items-center justify-center mt-12 max-h-[305px]">
        <p className="font-[600]">Mostly sunny</p>
        <CloudSunIcon />
        <p className="flex items-star text-[6rem] font-bold p-0">
          23<span className="text-[1rem] font-bold mt-6">0</span>
        </p>
        <p className="">Friday, 26 August 2022 | 10:00</p>
      </div>

      <div className="flex justify-center mt-2">
        <div
          className="flex items-center justify-between h-[95px] max-w-[80%] w-full 
        rounded bg-white/30 p-2"
        >
          <div className="flex flex-col justify-center items-center">
            <IoUmbrella size={22} />
            <p className="font-[500]">30%</p>
            <p className="text-[.8rem] font-[500]">Precipitation</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoWater size={22} className="text-blue-400" />
            <p className="font-[500]">30%</p>
            <p className="text-[.8rem] font-[500]">Humidity</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BsWind size={22} />
            <p className="font-[500]">30km/h</p>
            <p className="text-[.8rem] font-[500]">Wind Speed</p>
          </div>
        </div>
      </div>

      <div className="flex justify-start my-8">
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
      <div className="flex justify-start ">
        <div className="min-w-[398px] w-full ">
          <div className="">
            <div className="flex justify-between items-center mb-2 mt-6">
              {" "}
              <p className="text-[.8rem] font-[700]">Other Cities</p>
              <p className="hidden">+</p>
            </div>
            <div className="flex gap-2">
              {otherCities.map((el, idx) => (
                <div
                  key={idx}
                  className="max-w-[165px] w-full h-[50px] bg-white/30 rounded p-2 mr-2"
                >
                  <div className="flex gap-2 items-center">
                    <IoPartlySunnySharp size={28} />
                    <div className="w-[50%] text-left">
                      <p className="font-[700] text-[.9rem]">{el.city}</p>
                      <p className="text-[.6rem]">{el.weatherType}</p>
                    </div>
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

export default App;
