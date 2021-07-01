import {
    FETCH_GIFS,
    CHANGE_GIF
} from './const';

export const fetchGifs = (gifs) => ({
   type: FETCH_GIFS,
   gifs
});

export const changeGif = () => ({
   type: CHANGE_GIF
});