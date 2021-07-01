import React from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { geolocationRequest } from './actions';
import { GeolocationButton } from './components';
import GeolocationImg from './static/geolocation.png';

export const Geolocation = () => {
    const dispatch = useDispatch();

    return (
        <GeolocationButton
            src={GeolocationImg}
            onClick={R.pipe(geolocationRequest, dispatch)}
            alt='Geolocation'
        />
    );
}