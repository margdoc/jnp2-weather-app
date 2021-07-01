import React from 'react';
import { useSelector } from 'react-redux';
import { WEATHER_INFO_LABEL } from './const';

import { weatherNiceSelector } from './selectors';

export const WeatherType = () => {
    const weatherType = useSelector(weatherNiceSelector);

    return (
        <div>
            Weather is {WEATHER_INFO_LABEL[weatherType]}.
        </div>
    );
};