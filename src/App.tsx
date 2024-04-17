import React from "react";
import "./App.scss";
import WeatherMain from "./pages";
import ContextProvider from "./components/context/contextProvider";

function App() {
  return (
    <ContextProvider>
      <WeatherMain />
    </ContextProvider>
  );
}

export default App;
