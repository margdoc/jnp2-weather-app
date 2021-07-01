import { createSelector } from "reselect";
import * as R from 'ramda';

import { GIF_REDUCER_NAME } from './reducer';
import { getter } from "../../helpers";

const gifReducerStateSelector = R.prop(GIF_REDUCER_NAME);

export const isLoadedSelector = createSelector(
    gifReducerStateSelector,
    getter('isLoaded')
);

const currentGifIndexSelector = createSelector(
    gifReducerStateSelector,
    getter('currentGif')
);

const dataSelector = createSelector(
    gifReducerStateSelector,
    getter('data')
);

const gifUrlGetter = R.pipe(
    getter('media'),
    getter(0),
    getter('gif'),
    getter('url')
);

export const currentGifSelector = createSelector(
    currentGifIndexSelector,
    dataSelector,
    (gifIndex, data) => gifUrlGetter(data.get(gifIndex))
);