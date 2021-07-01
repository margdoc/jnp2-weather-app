export const SET_WEATHER_TYPE = 'weather-options/SET_WEATHER_TYPE';

export const WEATHER_OPTIONS = {
    REALTIME: "REALTIME",
    DAILY: "DAILY",
    HOURLY: "HOURLY",
    NONE: "NONE"
};

export const WEATHER_OPTIONS_LABELS = {
    REALTIME: "Realtime",
    [WEATHER_OPTIONS.DAILY]: "Daily",
    [WEATHER_OPTIONS.HOURLY]: "Hourly"
};

export const DEFAULT_WEATHER = WEATHER_OPTIONS.REALTIME;