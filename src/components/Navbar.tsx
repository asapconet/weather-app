import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import WeatherContext from "./context/ContextApi";
import { WeatherContextType } from "@/types/contextTypes";
import ApLink from "./LInk";

export const Navbar = () => {
 const weatherContext = useContext<WeatherContextType>(WeatherContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [recentCities, setRecentCities] = useState<string[]>([]);
  const { cityData } = weatherContext || {};

  useEffect(() => {
    const savedCities = localStorage.getItem("recentCities");
    if (savedCities) {
      setRecentCities(JSON.parse(savedCities));
    }
  }, []);

  useEffect(() => {
    if (cityData?.name && !recentCities.includes(cityData.name)) {
      const updatedCities = [...recentCities];
      updatedCities.unshift(cityData.name);
      if (updatedCities.length > 5) {
        updatedCities.pop();
      }
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSelectCity = (city: string) => {
    setSearchQuery("");
    setSearchResults([]);
    // You can perform additional actions here, such as fetching weather data for the selected city
    console.log("Selected city:", city);
  };

  return (
    <div className="flex justify-between items-start">
      <span className="bg-white/30 backdrop-opacity-10 rounded p-2">
        <IoGrid />
      </span>

      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <ApLink
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search cities..."
          className="border border-gray-300 px-4 py-2 w-full h-8 rounded-md"
        />
        {searchResults.length > 0 && (
          <div className="max-w-sm border border-gray-300 rounded-md overflow-hidden">
            <ul>
              {searchResults.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectCity(city)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* <p className="font-semibold text-lg">Recently Searched Cities</p> */}
        <div className="flex flex-col items-start gap-1">
          {recentCities.map((city, index) => (
            <span key={index}>{city}</span>
          ))}
        </div>
      </div>

      <span>
        <BsSearch />
      </span>
    </div>
  );
};
