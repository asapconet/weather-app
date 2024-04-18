import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import WeatherContext from "./context/ContextApi";
import { WeatherContextType } from "@/types/contextTypes";
import ApInput from "./Input";
import DebouncedInput from "./DebouncedInput";
import { useRecoilState } from "recoil";
import { searchResultsState, recentCitiesState } from "../atoms/searchState";

export const Navbar = () => {
  const weatherContext = useContext<WeatherContextType>(WeatherContext);
  const { cityData } = weatherContext || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);
  const [recentCities, setRecentCities] = useRecoilState(recentCitiesState);

  useEffect(() => {
    const savedCities = localStorage.getItem("recentCities");
    if (savedCities) {
      setRecentCities(JSON.parse(savedCities));
    }
  }, []);

  useEffect(() => {
    if (cityData?.name && !recentCities.includes(cityData?.name)) {
      const updatedCities = [cityData.name, ...recentCities.slice(0, 4)];
      setRecentCities(updatedCities);
      localStorage.setItem("recentCities", JSON.stringify(updatedCities));
    }
  }, [cityData]);

  const handleSearch = (query: string) => {
    // Implement your city search logic here
    // For example, fetch cities from an API or filter from a predefined list
    // For now, we'll just use a dummy list of cities
    const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
    const results = cities.filter((city) =>
      city.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectCity = (city: string) => {
    setSearchQuery("");
    // setSearchResults([]);

    const updatedRecentCities = [
      city,
      ...recentCities.filter((c) => c !== city).slice(0, 4),
    ];
    setRecentCities(updatedRecentCities);
    // You can perform additional actions here, such as fetching weather data for the selected city
    console.log("Selected city:", city);
  };

  console.log("error:", error);

  return (
    <div className="flex justify-between items-start relative">
      <span className="bg-white/30 backdrop-opacity-10 rounded p-2">
        <IoGrid />
      </span>

      <div className="flex flex-col gap-2 items-center justify-center">
        <DebouncedInput
          type="text"
          value={searchQuery}
          onChange={(value) => {
            setSearchQuery(value.toString()); // Convert value to string before setting state
            handleSearch(value.toString()); // Perform search
          }}
          placeholder="Search cities..."
          className="bg-transparent border border-gray-300 px-4 py-2 w-full h-8 rounded-md"
        />
        {searchQuery !== "" && searchResults.length > 0 && (
          <div className="min-w-[15rem] border border-gray-300 rounded-md absolute top-20 overflow-hidden">
            <ul>
              {searchResults.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectCity(city)}
                  className="px-4 py-2 text-left cursor-pointer hover:bg-gray-100 hover:text-gray-600"
                >
                  {!city ? error : city}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* <p className="font-semibold text-lg">Recently Searched Cities</p> */}
        {searchQuery === "" && recentCities.length > 0 && (
          <div className="min-w-[15rem] border border-gray-300 rounded-md absolute top-20 overflow-hidden">
            <ul>
              {recentCities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectCity(city)}
                  className="px-4 py-2 text-left cursor-pointer hover:bg-gray-100 hover:text-gray-600"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <span>
        <BsSearch />
      </span>
    </div>
  );
};
