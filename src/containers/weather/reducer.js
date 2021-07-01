import { fromJS } from 'immutable';

import { GET_WEATHER } from '../search-bar/const';
import { WEATHER_OPTIONS } from '../weather-options/const';
import {
    FETCH_CURRENT_WEATHER,
    FETCH_DAILY_WEATHER,
    FETCH_HOURLY_WEATHER,
    WEATHER_CACHED
} from './const';

export const WEATHER_REDUCER_NAME = 'weather';

const initialState = fromJS({
    isLoading: false,
    weatherType: WEATHER_OPTIONS.NONE,
    location: "",
    data: null,
});

const fetchWeather = (state, type, data, location) => {
    const { name, region, country } = location;

    return state
        .set('isLoading', false)
        .set('data', data)
        .set('weatherType', type)
        .set('location', `${name}, ${region}, ${country}`);
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DAILY_WEATHER: {
            return fetchWeather(
                state, WEATHER_OPTIONS.DAILY,
                action.weather.forecast.forecastday, action.weather.location
            );
        }
        case FETCH_HOURLY_WEATHER: {
            return fetchWeather(
                state, WEATHER_OPTIONS.HOURLY,
                action.weather.forecast.forecastday, action.weather.location
            );
        }
        case FETCH_CURRENT_WEATHER: {
            return fetchWeather(
                state, WEATHER_OPTIONS.REALTIME,
                action.weather.current, action.weather.location
            );
        }
        case GET_WEATHER:
            return state
                .set('isLoading', true);
        case WEATHER_CACHED:
            return state
                .set('isLoading', false);
        default:
            return state;
    }
};