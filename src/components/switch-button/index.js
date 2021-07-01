import React from 'react';

import { SwitchButtonWrapper } from './SwitchButtonWrapper';

export const SwitchButton = ({ onClick, children }) => (
    <SwitchButtonWrapper>
        <input
            type='checkbox'
            onClick={onClick}
        />
        <label>{children}</label>
    </SwitchButtonWrapper>
);