import React from 'react';
import Loader from 'react-loader-spinner';
import { useTheme } from 'styled-components';

export const LoadingAnimation = () => {
    const theme = useTheme();

    return (
        <Loader
            type='Rings'
            color={theme.colors.loader}
        />
    );
};
