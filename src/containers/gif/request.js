import { GIF_APP_URL } from '../../const';

export const gifsRequestUrl = ({ search }) =>
    `${GIF_APP_URL}/search?q=${search}`
;