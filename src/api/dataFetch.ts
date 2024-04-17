//TODO fetching data
const fetchWeatherdata = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=460add583d60f7ac623bc126ffcd2205`
  ).then((res) => {
    if (!res.ok) {
      throw Error("wahala dey guy");
    }
    return res.json();
  });
};

const formatcollectedData = (data) => {
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

  const { main, description, icon } = weather?.[0];

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
    main,
    description,
    icon,
    temp_max,
    temp_min,
    speed,
    deg,
  };
};

const fetchFomattedData = async (city) => {
  try {
    const data = await fetchWeatherdata(city);
    const formattedData = formatcollectedData(data);
    return formattedData;
  } catch (error) {
    throw Error("still error");
  }
 
};

export default fetchFomattedData;
