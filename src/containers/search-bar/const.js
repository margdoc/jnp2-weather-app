import { WEATHER_OPTIONS } from '../weather-options/const';

export const GET_WEATHER = 'weather-options/GET_WEATHER';

export const DAYS_TO_REQUEST = {
    [WEATHER_OPTIONS.DAILY]: 3,
    [WEATHER_OPTIONS.HOURLY]: 1
}

export const REALTIME_WEATHER_INTERVAL = 15 * 60 * 1000;