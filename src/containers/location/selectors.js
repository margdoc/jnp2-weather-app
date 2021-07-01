import { createSelector } from 'reselect';
import * as R from 'ramda';

import { getter } from '../../helpers';
import { LOCATION_REDUCER_NAME } from './reducer';

const getLocationReducerState = R.prop(LOCATION_REDUCER_NAME);

export const locationSelector = createSelector(
    getLocationReducerState,
    getter('location')
);

export const suggestionsSelector = createSelector(
    getLocationReducerState,
    (suggestions) => getter('suggestions')(suggestions).toJS()
);