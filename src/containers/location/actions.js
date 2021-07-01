import {
    SET_CITY,
    TYPE_CITY,
    FETCH_SUGGESTIONS
} from './const';

export const setCity = (city) => ({
    type: SET_CITY,
    city
});

export const typeCity = (city) => ({
    type: TYPE_CITY,
    city
});

export const fetchSuggestions = (suggestions) => ({
    type: FETCH_SUGGESTIONS,
    suggestions
});
