import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import {
  searchResultsState,
  recentCitiesState,
  cityToSearchState,
} from "../atoms/searchState";
import DebouncedInput from "./DebouncedInput";
import { useFetchCities } from "../api/dataFetch";
import { isDegree as isDegreeState } from "../atoms/metricState";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [isDegree, setIsDegree] = useRecoilState(isDegreeState);
  const [cityToSearch, setCityToSearch] = useRecoilState(cityToSearchState);
  const [recentCities, setRecentCities] = useRecoilState(recentCitiesState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  const { data: cityData, isLoading, isError } = useFetchCities(searchQuery);

  useEffect(() => {
    const savedCities = localStorage.getItem("recentCities");
    if (savedCities) {
      setRecentCities(JSON.parse(savedCities));
    }
  }, []);

  useEffect(() => {
    if (cityData && Array.isArray(cityData)) {
      const results = cityData
        .filter((city) =>
          city.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((city) => `${city.name}, ${city.country}`);

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, cityData, setSearchResults]);

  const handleSelectCity = (city: string) => {
    setSearchQuery("");
    setSearchResults([]);

    const cityName = city.split(",")[0];
    const updatedRecentCities = [
      cityName,
      ...recentCities.filter((c) => c !== cityName).slice(0, 4),
    ];
    setRecentCities(updatedRecentCities);
    setCityToSearch(cityName);
  };

  const toggleDegreeUnit = () => {
    setIsDegree(isDegree === "C" ? "F" : "C");
  };

  const toggleSearchBarVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="flex justify-between items-start relative">
      <span
        className="bg-white/30 backdrop-opacity-10 rounded p-2"
        onClick={toggleDegreeUnit}
      >
        {isDegree === "C" ? "°C" : "°F"}
      </span>

      {isSearchVisible && (
        <motion.div
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <div className="flex flex-col gap-2 items-center justify-center ">
            {/* Search bar */}
            <DebouncedInput
              type="text"
              value={searchQuery}
              onChange={(value) => setSearchQuery(value)}
              placeholder="Search cities..."
              className="bg-transparent border border-gray-300 px-4 py-2 w-full h-8 rounded-md "
            />

            {/* Search results */}
            {searchQuery !== "" && searchResults.length === 0 ? (
              <div className="min-w-[15rem] border border-gray-300 rounded-md absolute top-16 px-4 py-2">
                no city found
              </div>
            ) : null}
            {searchQuery === "" && recentCities.length > 0 ? (
              <div className="min-w-[15rem] border border-gray-300 rounded-md absolute top-16 overflow-hidden">
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
            ) : null}

            {/* Recently searched  */}
            {searchQuery !== "" && searchResults.length > 0 ? (
              <div className="min-w-[15rem] border border-gray-300 rounded-md absolute top-16 overflow-hidden">
                <ul>
                  {searchResults.map((city, index) => (
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
            ) : null}
          </div>
        </motion.div>
      )}

      {/* Toggle search bar visibility */}
      <span className="bg-white/30 backdrop-opacity-10 rounded p-2 cursor-pointer">
        <BsSearch
          onClick={toggleSearchBarVisibility}
          className="cursor-pointer"
        />
      </span>
    </div>
  );
};
