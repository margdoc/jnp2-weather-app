import { ofType } from 'redux-observable';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { setCity } from '../location/actions';
import { SET_CITY, TYPE_CITY } from '../location/const';
import { GEOLOCATION_REQUEST } from './const';

const currentPosition$ = new Observable(observer => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            observer.next(position);
            observer.complete();
        }
    );
});

export const geolocalizationEpic = (action$) =>
    action$.pipe(
        ofType(GEOLOCATION_REQUEST),
        mergeMap(() =>
            currentPosition$.pipe(
                map((position) => setCity(
                    `${position.coords.latitude} ${position.coords.longitude}`
                )),
                takeUntil(
                    action$.pipe(
                        ofType(TYPE_CITY, SET_CITY)
                    )
                )
            )
        )
    )
;