import { lightColors, darkColors } from './colors';
import { fonts } from './fonts';
import { dims } from './dims';

const basicTheme = {
    fonts,
    dims
};

const lightTheme = {
    ...basicTheme,
    colors: lightColors,
};

const darkTheme = {
    ...basicTheme,
    colors: darkColors,
};

export const THEMES = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
    UNKNOWN: 'UNKNOWN'
};

export const DEFAULT_THEME = THEMES.DARK;

export const THEMES_VALUES = {
    [THEMES.LIGHT]: lightTheme,
    [THEMES.DARK]: darkTheme,
    [THEMES.UNKNOWN]: { }
};