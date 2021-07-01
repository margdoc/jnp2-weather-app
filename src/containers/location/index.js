import React from 'react';

import { Geolocation } from '../geolocation';
import { CityPicker, LocationWrapper } from './components';

export const Location = () => (
    <LocationWrapper>
        <CityPicker />
        <Geolocation />
    </LocationWrapper>
);