import { fromJS } from 'immutable';

import {
    DEFAULT_WEATHER,
    SET_WEATHER_TYPE,
} from './const';

export const WEATHER_OPTIONS_REDUCER_NAME = 'weather_options';

const initialState = fromJS({
    weatherType: DEFAULT_WEATHER,
});

export const weatherOptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_TYPE: {
            const { weatherType } = action;

            return state
                .set('weatherType', weatherType)
            ;
        }
        default:
            return state;
    }
};