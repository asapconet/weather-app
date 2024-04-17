import { WiSunrise, WiSunset, WiDaySunny } from "react-icons/wi";
type WeatherData = {
  time: string;
  icon: any;
  temperature: number;
  degree: boolean;
};

export const daysData7: WeatherData[] = [
  {
    time: "12 AM",
    icon: "",
    temperature: 20,
    degree: true,
  },
  { time: "12 AM", icon: "", temperature: 20, degree: true },
  { time: "12 AM", icon: "", temperature: 20, degree: true },
  { time: "12 AM", icon: "", temperature: 20, degree: true },
  { time: "12 AM", icon: "", temperature: 20, degree: true },
  { time: "12 AM", icon: "", temperature: 20, degree: true },
  { time: "12 AM", icon: "", temperature: 20, degree: true },
];

interface CityData {
  city: string;
  weatherType: string;

  temperature: number;
  degree: boolean;
}

const icons: any = {
  sunrise: WiSunrise,
  sunset: WiSunset,
  sunny: WiDaySunny,
};

export const otherCities: CityData[] = [
  {
    city: "Sunrise",
    weatherType: "Snowy",

    temperature: 2,
    degree: false,
  },
  {
    city: "Sunset",
    weatherType: "Snowy",

    temperature: 2,
    degree: false,
  },
  {
    city: "High",
    weatherType: "Snowy",

    temperature: 2,
    degree: true,
  },
  {
    city: "Low",
    weatherType: "Snowy",

    temperature: 2,
    degree: true,
  },
];
