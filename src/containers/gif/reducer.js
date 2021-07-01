import { fromJS } from 'immutable';

import { GET_WEATHER } from '../search-bar/const';
import { FETCH_GIFS, CHANGE_GIF } from './const';

export const GIF_REDUCER_NAME = 'gif';

const initialState = fromJS({
    isLoaded: false,
    currentGif: 0,
    data: []
});

export const gifsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return state
                .set('isLoaded', false);
        case FETCH_GIFS:
            return state
                .set('isLoaded', true)
                .set('currentGif', 0)
                .set('data', fromJS(action.gifs.results));
        case CHANGE_GIF:
            return state
                .update('currentGif', (currentGif) =>
                    (currentGif + 1) % state.get('data').size
                );
        default:
            return state;
    }
};