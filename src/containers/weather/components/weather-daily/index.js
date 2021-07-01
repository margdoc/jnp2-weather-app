import React from 'react';
import {useSelector} from 'react-redux';

import { TableWrapper } from '../../../../components';
import { weatherSelector } from '../../selectors';
import { WeatherDayRow } from './WeatherDayRow';

export const WeatherDaily = () => {
    const forecast = useSelector(weatherSelector);

    return (
        <TableWrapper>
            <tbody>
                <tr>
                    <th>Day</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Avg</th>
                </tr>
                {forecast.map((day, id) =>
                    <WeatherDayRow
                        key={`weather-day-row-${id}`}
                        day={day}
                    />
                )}
            </tbody>
        </TableWrapper>
    )
};