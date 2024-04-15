import React from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { MainAppLayout } from "./layouts/mainApp";
import { CloudSunIcon } from "./assets/icons";

function App() {
  return (
    <MainAppLayout>
      <Navbar />
      <div className="flex flex-col gap-2 items-center justify-center mt-8 max-h-[305px]">
        <p className="font-[600]">Mostly sunny</p>
        <CloudSunIcon />
        <p className="flex items-star text-[6rem] font-bold p-0">
          23<span className="text-[1rem] font-bold mt-6">0</span>
        </p>
        <p className="">Friday, 26 August 2022 | 10:00</p>
      </div>
      <div className="flex justify-center mt-2">
        <div className="h-[95px] max-w-[80%] w-full rounded bg-white/30"></div>
      </div>
    </MainAppLayout>
  );
}

export default App;
