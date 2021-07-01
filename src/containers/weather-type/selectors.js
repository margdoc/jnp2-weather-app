import { createSelector } from 'reselect';

import { weatherSelector } from '../weather/selectors';
import { getForecastType } from './props';

export const weatherNiceSelector = createSelector(
    weatherSelector,
    getForecastType
);