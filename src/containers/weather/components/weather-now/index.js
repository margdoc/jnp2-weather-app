import React from 'react';
import { useSelector } from 'react-redux';

import {
    conditionIconProp,
    conditionTextProp,
    temperatureProp
} from '../../props';
import { temperatureDisplay } from '../../helpers';
import { weatherSelector } from '../../selectors';
import { WeatherNowWrapper } from './WeatherNowWrapper';

export const WeatherNow = () => {
    const currentWeather = useSelector(weatherSelector);

    const icon = conditionIconProp(currentWeather);
    const alt = conditionTextProp(currentWeather);
    const temperature = temperatureProp(currentWeather);

    return (
        <WeatherNowWrapper>
            Now: {temperatureDisplay(temperature)}
            <img
                src={icon}
                alt={alt}
            />
        </WeatherNowWrapper>
    );
};