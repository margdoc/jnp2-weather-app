import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { GlobalStyle } from '../../global-styles';
import { THEMES_VALUES } from '../../themes';
import { WEATHER_OPTIONS } from '../weather-options/const';
import { isLoadingSelector, weatherTypeSelector } from '../weather/selectors';
import { SearchBar } from '../search-bar';
import { WeatherType } from '../weather-type';
import { Weather } from '../weather';
import { Content, Navbar } from './components';
import { themeSelector } from './selectors';

export const App = () => {
    const theme = useSelector(themeSelector);
    const weatherType = useSelector(weatherTypeSelector);
    const isLoading = useSelector(isLoadingSelector);

    return (
        <ThemeProvider theme={THEMES_VALUES[theme]}>
            <GlobalStyle/>
            <Navbar/>
            <Content>
                <SearchBar/>
                {
                    !isLoading && (weatherType === WEATHER_OPTIONS.DAILY ||
                        weatherType === WEATHER_OPTIONS.HOURLY)
                        ? <WeatherType/>
                        : <></>
                }
                <Weather/>
            </Content>
        </ThemeProvider>
    );
};
