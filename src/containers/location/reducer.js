import { fromJS } from 'immutable';

import {
    FETCH_DAILY_WEATHER,
    FETCH_HOURLY_WEATHER,
    FETCH_CURRENT_WEATHER
} from '../weather/const';
import {
    SET_CITY,
    TYPE_CITY,
    FETCH_SUGGESTIONS,
} from './const';

export const LOCATION_REDUCER_NAME = 'location';

const initialState = fromJS({
    location: '',
    suggestions: []
});

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_WEATHER:
        case FETCH_DAILY_WEATHER:
        case FETCH_HOURLY_WEATHER: {
            const { name, region, country } = action.weather.location;

            return state
                .set('location', `${name}, ${region}, ${country}`);
        }
        case SET_CITY: {
            const { city } = action;

            return state
                .set('location', city)
                .set('suggestions', fromJS([]));
        }
        case TYPE_CITY: {
            const { city } = action;

            return state
                .set('location', city);
        }
        case FETCH_SUGGESTIONS: {
            const { suggestions } = action;

            return state
                .set('suggestions', fromJS(suggestions));
        }
        default:
            return state;
    }
};