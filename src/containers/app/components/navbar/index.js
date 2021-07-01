import React from 'react';

import { NavbarWrapper } from './NavbarWrapper';
import { ThemeSwitchButton } from '../ThemeSwitchButton';

export const Navbar = () => (
    <NavbarWrapper>
        <div
            className='navbar-header'
        >
            Weather App
        </div>
        <div
            className='navbar-theme-switch-button'
        >
            <ThemeSwitchButton/>
        </div>
    </NavbarWrapper>
);