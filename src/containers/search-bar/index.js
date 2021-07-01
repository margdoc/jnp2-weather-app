import React from 'react';
import { WeatherOptionPicker } from '../weather-options';
import { SearchBarWrapper, SearchButton } from './components';
import { Location } from '../location';

export const SearchBar = () => (
    <SearchBarWrapper>
        <Location/>
        <WeatherOptionPicker/>
        <SearchButton/>
    </SearchBarWrapper>
);