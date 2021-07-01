import { THEMES } from './const';

export const getOppositeTheme = (theme) => {
    switch (theme) {
        case THEMES.DARK:
            return THEMES.LIGHT;
        case THEMES.LIGHT:
            return THEMES.DARK;
        default:
            return THEMES.UNKNOWN;
    }
};