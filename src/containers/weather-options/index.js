import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RadioButton } from '../../components';
import { setWeatherType } from './actions';
import { WeatherOptionWrapper } from './components';
import { WEATHER_OPTIONS_LABELS, WEATHER_OPTIONS } from './const';
import { weatherTypeSelector } from './selectors';

export const WeatherOptionPicker = () => {
    const dispatch = useDispatch();
    const currentOption = useSelector(weatherTypeSelector);

    return (
        <WeatherOptionWrapper>
            {Object.entries(WEATHER_OPTIONS_LABELS).map(([option, label], id) =>
                <RadioButton
                    key={`option-${id}`}
                    checked={WEATHER_OPTIONS[option] === currentOption}
                    onClick={() => dispatch(setWeatherType(WEATHER_OPTIONS[option]))}
                >
                    {label}
                </RadioButton>
            )}
        </WeatherOptionWrapper>
    );
};