import { API_KEY, APP_URL } from '../../const';

export const suggestionsRequestURL = ({ city }) =>
    `${APP_URL}/search.json?key=${API_KEY}&q=${city}`
;