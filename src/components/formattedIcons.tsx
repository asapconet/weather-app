import fewCloudsday from "../assets/images/30.png";
import fewCloudsNight from "../assets/images/29.png";
import clearSkyNight from "../assets/images/31.png";
import clearSkyDay from "../assets/images/32.png";
import scatteredCloud from "../assets/images/26.png";
import brokenCloudsNight from "../assets/images/27.png";
import brokenCloudsDay from "../assets/images/28.png";
import showerRain from "../assets/images/9.png";
import rainDay from "../assets/images/39.png";
import rainNight from "../assets/images/45.png";
import thunderstormNight from "../assets/images/1.png";
import thunderstormDay from "../assets/images/38.png";
import snowDay from "../assets/images/41.png";
import snowNight from "../assets/images/42.png";
import mistNight from "../assets/images/21.png";
import mistDay from "../assets/images/34.png";

export const weatherIcons: { [key: string]: string } = {
  "01d": clearSkyDay,
  "01n": clearSkyNight,
  "02d": fewCloudsday,
  "02n": fewCloudsNight,
  "03d": scatteredCloud,
  "03n": scatteredCloud,
  "04d": brokenCloudsDay,
  "04n": brokenCloudsNight,
  "09d": showerRain,
  "09n": showerRain,
  "10d": rainDay,
  "10n": rainNight,
  "11d": thunderstormDay,
  "11n": thunderstormNight,
  "13d": snowDay,
  "13n": snowNight,
  "50d": mistDay,
  "50n": mistNight,
};
