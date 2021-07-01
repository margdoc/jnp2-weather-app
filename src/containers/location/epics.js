import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map, mergeMap, takeUntil } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { fetchSuggestions } from './actions';
import { TYPE_CITY } from './const';
import { suggestionsRequestURL } from './urls';

const getSuggestionsEpic = (action$) =>
    action$.pipe(
        ofType(TYPE_CITY),
        filter((action) => action.city !== ''),
        mergeMap(action =>
            ajax.getJSON(suggestionsRequestURL({
                city: action.city
            })).pipe(
                map(fetchSuggestions),
                catchError(() => EMPTY),
                takeUntil(action$.pipe(
                    ofType(TYPE_CITY),
                ))
            )
        )
    )
;

export { getSuggestionsEpic as locationEpics };