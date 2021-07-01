import React from 'react';
import { useSelector } from 'react-redux';

import { conditionTextSelector } from '../weather/selectors';
import { currentGifSelector } from './selectors';

export const WeatherGif = () => {
    const currentGif = useSelector(currentGifSelector);
    const alt = useSelector(conditionTextSelector);

    return (
        <img
            src={currentGif}
            alt={alt}
        />
    );
};