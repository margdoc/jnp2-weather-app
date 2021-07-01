import React from 'react';
import { useSelector } from 'react-redux';
import * as R from 'ramda';

import { TableWrapper } from '../../../../components';
import { hoursProp } from '../../props';
import { weatherSelector } from '../../selectors';
import { WeatherHourRow } from './WeatherHourRow';

export const WeatherHourly = () => {
    const forecast = useSelector(weatherSelector);
    const hours = R.unnest(R.map(hoursProp, forecast));

    return (
        <TableWrapper>
            <tbody>
            <tr>
                <th>Hour</th>
                <th>Temp</th>
            </tr>
            {hours.map((hour, id) =>
                <WeatherHourRow
                    key={`weather-day-row-${id}`}
                    hour={hour}
                />
            )}
            </tbody>
        </TableWrapper>
    )
};