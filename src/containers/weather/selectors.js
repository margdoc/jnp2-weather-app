import { createSelector } from 'reselect';
import * as R from 'ramda';

import { getter } from '../../helpers';
import { WEATHER_REDUCER_NAME } from './reducer';
import { conditionTextProp } from './props';

const getWeatherReducerState = R.prop(WEATHER_REDUCER_NAME);

export const weatherSelector = createSelector(
    getWeatherReducerState,
    getter('data')
);

export const isLoadingSelector = createSelector(
    getWeatherReducerState,
    getter('isLoading')
);

export const weatherTypeSelector = createSelector(
    getWeatherReducerState,
    getter('weatherType')
);

export const locationSelector = createSelector(
    getWeatherReducerState,
    getter('location')
);

export const conditionTextSelector = createSelector(
    weatherSelector,
    conditionTextProp
);