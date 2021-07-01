import {
    FETCH_DAILY_WEATHER,
    FETCH_HOURLY_WEATHER,
    FETCH_CURRENT_WEATHER,
    WEATHER_CACHED
} from './const';

export const fetchDailyWeather = (weather) => ({
    type: FETCH_DAILY_WEATHER,
    weather
});

export const fetchHourlyWeather = (weather) => ({
    type: FETCH_HOURLY_WEATHER,
    weather
});

export const fetchCurrentWeather = (weather) => ({
    type: FETCH_CURRENT_WEATHER,
    weather
});

export const weatherCached = () => ({
   type: WEATHER_CACHED
});