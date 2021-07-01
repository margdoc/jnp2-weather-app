import { createSelector } from 'reselect';

import { locationSelector } from '../location/selectors';
import {
    locationSelector as cachedLocationSelector,
    weatherTypeSelector as cachedWeatherTypeSelector
} from '../weather/selectors';
import { weatherTypeSelector } from '../weather-options/selectors';

export const isCacheValidSelector = createSelector(
    locationSelector,
    weatherTypeSelector,
    cachedLocationSelector,
    cachedWeatherTypeSelector,
    (currentLocation, weatherType, cachedLocation, cachedType) =>
        cachedLocation === currentLocation &&
        weatherType === cachedType
);