import { createSelector } from 'reselect';
import * as R from 'ramda';

import { APP_REDUCER_NAME } from './reducer';
import { getter } from '../../helpers';

const getAppReducerState = R.prop(APP_REDUCER_NAME);

export const themeSelector = createSelector(
    getAppReducerState,
    getter('theme')
);