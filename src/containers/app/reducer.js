import { fromJS } from 'immutable';

import { DEFAULT_THEME, getOppositeTheme } from '../../themes';
import { CHANGE_THEME } from './const';

export const APP_REDUCER_NAME = 'app';

const initialState = fromJS({
    theme: DEFAULT_THEME
});

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return state
                .update('theme', getOppositeTheme);
        default:
            return state;
    }
};