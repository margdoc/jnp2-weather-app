import { ofType, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, /*delay, */filter, map, mergeMap, takeUntil } from 'rxjs/operators';
import { EMPTY, timer } from 'rxjs';

import { TYPE_CITY } from '../location/const';
import { locationSelector } from '../location/selectors';
import { fetchCurrentWeather, fetchDailyWeather, fetchHourlyWeather, weatherCached } from '../weather/actions';
import { WEATHER_OPTIONS } from '../weather-options/const';
import { weatherTypeSelector } from '../weather-options/selectors';
import { DAYS_TO_REQUEST, GET_WEATHER, REALTIME_WEATHER_INTERVAL } from './const';
import { isCacheValidSelector } from './selectors';
import { weatherCurrentURL, weatherDaysURL } from './urls';

const getCurrentWeatherEpic = (action$, store$) =>
    action$.pipe(
        ofType(GET_WEATHER),
        filter(() =>
            weatherTypeSelector(store$.value) === WEATHER_OPTIONS.REALTIME
        ),
        mergeMap(() =>
            timer(0, REALTIME_WEATHER_INTERVAL).pipe(
                mergeMap(() =>
                    ajax.getJSON(weatherCurrentURL({
                        city: locationSelector(store$.value)
                    })).pipe(
                        map(fetchCurrentWeather),
                        catchError(() => EMPTY),
                    )
                ),
                takeUntil(action$.pipe(
                    ofType(GET_WEATHER),
                ))
            )
        )
    )
;

const getDailyWeatherEpic = (action$, store$) =>
    action$.pipe(
        ofType(GET_WEATHER),
        filter(() =>
            !isCacheValidSelector(store$.value) &&
            weatherTypeSelector(store$.value) === WEATHER_OPTIONS.DAILY
        ),
        mergeMap(() =>
            ajax.getJSON(weatherDaysURL({
                city: locationSelector(store$.value),
                days: DAYS_TO_REQUEST[WEATHER_OPTIONS.DAILY]
            })).pipe(
                map(fetchDailyWeather),
                catchError(() => EMPTY),
                takeUntil(action$.pipe(
                    ofType(TYPE_CITY),
                )),
                // delay(2000) For testing if loader displays correctly
            )
        )
    )
;

const getHourlyWeatherEpic = (action$, store$) =>
    action$.pipe(
        ofType(GET_WEATHER),
        filter(() =>
            !isCacheValidSelector(store$.value) &&
            weatherTypeSelector(store$.value) === WEATHER_OPTIONS.HOURLY
        ),
        mergeMap(() =>
            ajax.getJSON(weatherDaysURL({
                city: locationSelector(store$.value),
                days: DAYS_TO_REQUEST[WEATHER_OPTIONS.HOURLY]
            })).pipe(
                map(fetchHourlyWeather),
                catchError(() => EMPTY),
                takeUntil(action$.pipe(
                    ofType(TYPE_CITY),
                ))
            )
        )
    )
;

export const weatherCachedEpic = (action$, store$) =>
    action$.pipe(
        ofType(GET_WEATHER),
        filter(() =>
            isCacheValidSelector(store$.value) &&
            weatherTypeSelector(store$.value) !== WEATHER_OPTIONS.REALTIME
        ),
        map(() => weatherCached())
    )
;

export const searchBarEpics = combineEpics(
    getCurrentWeatherEpic,
    getDailyWeatherEpic,
    getHourlyWeatherEpic,
    weatherCachedEpic
);