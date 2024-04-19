export type CityAPIData = {
  name: string;
  state: string;
  lat: number;
  lon: number;
  country: string;
  local_names: Record<string, string>;
};
