import { combineReducers } from 'redux';

import { APP_REDUCER_NAME, appReducer } from './containers/app/reducer';
import { LOCATION_REDUCER_NAME, locationReducer } from './containers/location/reducer';
import { WEATHER_OPTIONS_REDUCER_NAME, weatherOptionsReducer } from './containers/weather-options/reducer';
import { WEATHER_REDUCER_NAME, weatherReducer } from './containers/weather/reducer';
import { GIF_REDUCER_NAME, gifsReducer } from './containers/gif/reducer';

const createReducer = () =>
    combineReducers({
        [APP_REDUCER_NAME]: appReducer,
        [WEATHER_OPTIONS_REDUCER_NAME]: weatherOptionsReducer,
        [WEATHER_REDUCER_NAME]: weatherReducer,
        [GIF_REDUCER_NAME]: gifsReducer,
        [LOCATION_REDUCER_NAME]: locationReducer
    })
;

export default createReducer;
