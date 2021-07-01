import React from 'react';

import {
    dateProp,
    minTemperatureProp,
    maxTemperatureProp,
    averageTemperatureProp,
    weatherTextProp,
    weatherIconProp
} from '../../props';
import { temperatureDisplay } from '../../helpers';

export const WeatherDayRow = ({ day }) => {
    const date = dateProp(day);
    const minTemperature = minTemperatureProp(day);
    const maxTemperature = maxTemperatureProp(day);
    const averageTemperature = averageTemperatureProp(day);
    const weatherText = weatherTextProp(day);
    const weatherIcon = weatherIconProp(day);

    return (
        <tr>
            <td>{date}</td>
            <td>{temperatureDisplay(minTemperature)}</td>
            <td>{temperatureDisplay(maxTemperature)}</td>
            <td>{temperatureDisplay(averageTemperature)}</td>
            <td><img
                src={weatherIcon}
                alt={weatherText}
            /></td>
        </tr>
    )
};