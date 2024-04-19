export function convertTemperature(temperature: number, unit: string) {
  if (unit === "C") {
    const celsius = temperature - 273.15;
    return Math.round(celsius);
  } else if (unit === "F") {
    const celsius = temperature - 273.15;
    const fahrenheit = (celsius * 9) / 5 + 32;
    return Math.round(fahrenheit);
  } else {
    return temperature;
  }
}
