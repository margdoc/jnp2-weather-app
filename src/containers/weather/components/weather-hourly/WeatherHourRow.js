import React from 'react';

import { temperatureDisplay } from '../../helpers';
import {
    timeProp,
    temperatureProp,
    conditionTextProp,
    conditionIconProp
} from '../../props';

export const WeatherHourRow = ({ hour }) => {
    const time = timeProp(hour);
    const temperature = temperatureProp(hour);
    const weatherText = conditionTextProp(hour);
    const weatherIcon = conditionIconProp(hour);

    return (
        <tr>
            <td>{time}</td>
            <td>{temperatureDisplay(temperature)}</td>
            <td><img
                src={weatherIcon}
                alt={weatherText}
            /></td>
        </tr>
    )
};