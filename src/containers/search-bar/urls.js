import { API_KEY, APP_URL } from '../../const';

export const weatherCurrentURL = ({ city }) =>
    `${APP_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
;

export const weatherDaysURL = ({ city, days }) =>
    `${APP_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`
;