import { createSelector } from 'reselect';
import * as R from 'ramda';

import { getter } from '../../helpers';
import { WEATHER_OPTIONS_REDUCER_NAME } from './reducer';

const getWeatherOptionsReducerState = R.prop(WEATHER_OPTIONS_REDUCER_NAME);

export const weatherTypeSelector = createSelector(
    getWeatherOptionsReducerState,
    getter('weatherType')
);