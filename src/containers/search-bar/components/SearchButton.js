import React from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { Button } from '../../../components';
import { getWeather } from '../actions';

export const SearchButton = () => {
    const dispatch = useDispatch();

    return (
        <Button
            onClick={R.pipe(getWeather, dispatch)}
        >
            Search
        </Button>
    )
};