import { CityAPIData } from "@/types/city";

export const formatCollectedData = (data: CityAPIData[]) => {
  const { name, local_names, country } = data;

  const localNamesArray = Object.entries<string>(local_names).map(
    ([locale, value]) => ({
      locale,
      value: value.toString(),
    })
  );

  return {
    name,
    country,
    localNames: localNamesArray,
  };
};
