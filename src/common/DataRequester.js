import axios from "axios";

import {
    URL_GET_WEATHER_FORECAST
} from "./Constants";


export const getWeatherForecast = async (id) => {
   try {
    const weatherForecast = await axios.get(URL_GET_WEATHER_FORECAST);

    return weatherForecast.data;
   } catch (err) {
     console.log("Unable to get weather data: ", err);
      
     return [];
   }
};