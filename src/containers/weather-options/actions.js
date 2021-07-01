import {
    SET_WEATHER_TYPE,
} from './const';

export const setWeatherType = (weatherType) => ({
    type: SET_WEATHER_TYPE,
    weatherType
});