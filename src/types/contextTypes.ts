export type WeatherContextType = {
  temp: number;
  country: string;
  description: string;
  icon: string;
  name: string;
  sunrise: number;
  sunset: number;
  temp_max: number;
  temp_min: number;
  dt: number;
  cityData?: object| any;
  loading: string;
  setError: string;
  onAddCity: (city: string) => void;
};
