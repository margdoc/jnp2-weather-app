import React from 'react';
import { useSelector } from 'react-redux';

import { WeatherGif } from '../gif';
import { isLoadedSelector as isGifLoadedSelector } from '../gif/selectors';
import { WEATHER_OPTIONS } from '../weather-options/const';
import { WeatherDaily, WeatherHourly, WeatherNow, LoadingAnimation } from './components';
import { isLoadingSelector, weatherTypeSelector } from './selectors';

export const Weather = () => {
    const weatherType = useSelector(weatherTypeSelector);
    const isLoading = useSelector(isLoadingSelector);
    const isGifLoaded = useSelector(isGifLoadedSelector);

    if (isLoading) {
        return <LoadingAnimation/>;
    }

    switch (weatherType) {
        case WEATHER_OPTIONS.REALTIME:
            return <>
                <WeatherNow/>
                {
                    isGifLoaded
                        ? <WeatherGif/>
                        : <></>
                }
            </>
        case WEATHER_OPTIONS.DAILY:
            return <WeatherDaily/>;
        case WEATHER_OPTIONS.HOURLY:
            return <WeatherHourly/>;
        default:
            return <></>;
    }
};