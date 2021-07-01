import { combineEpics, ofType } from 'redux-observable';
import { catchError, filter, map, takeUntil, mergeMap } from 'rxjs/operators';
import { EMPTY, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { GET_WEATHER } from '../search-bar/const';
import { FETCH_CURRENT_WEATHER } from '../weather/const';
import { conditionTextSelector } from '../weather/selectors';
import { WEATHER_OPTIONS } from '../weather-options/const';
import { weatherTypeSelector } from '../weather-options/selectors';
import { changeGif, fetchGifs } from './actions';
import { FETCH_GIFS, GIF_SWITCH_TIME } from './const';
import { gifsRequestUrl } from './request';

const gifsRequestEpic = (action$, store$) =>
    action$.pipe(
        ofType(FETCH_CURRENT_WEATHER),
        filter(() =>
            weatherTypeSelector(store$.value) === WEATHER_OPTIONS.REALTIME
        ),
        mergeMap(() => ajax.getJSON(gifsRequestUrl({
                search: conditionTextSelector(store$.value)
            })).pipe(
                map(fetchGifs),
                catchError(() => EMPTY),
                takeUntil(action$.pipe(
                    ofType(GET_WEATHER),
                ))
            )
        )
    )
;

const gifSwitchEpic = (action$) =>
    action$.pipe(
        ofType(FETCH_GIFS),
        mergeMap(() =>
            interval(GIF_SWITCH_TIME).pipe(
                map(changeGif),
                takeUntil(action$.pipe(
                    ofType(GET_WEATHER),
                ))
            )
        )
    )
;

export const gifsEpic = combineEpics(
    gifSwitchEpic,
    gifsRequestEpic
);