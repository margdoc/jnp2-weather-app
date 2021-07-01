import React from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { SwitchButton } from '../../../components/index';
import { changeTheme } from '../actions';

export const ThemeSwitchButton = () => {
    const dispatch = useDispatch();

    return (
        <SwitchButton
            onClick={R.pipe(changeTheme, dispatch)}
        >
            Light / Dark mode
        </SwitchButton>
    );
};