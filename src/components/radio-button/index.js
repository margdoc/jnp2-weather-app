import React from 'react';

import { RadioButtonWrapper } from './RadioButtonWrapper';

export const RadioButton = ({ onClick, checked, children }) => (
    <RadioButtonWrapper
        checked={checked}
    >
        <input
            type='radio'
            checked={checked}
            onClick={onClick}
        />
        {children}
    </RadioButtonWrapper>
);