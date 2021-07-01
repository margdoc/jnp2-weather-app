import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    color: inherit;
    font-weight: 400;
    line-height: 1.5;
    background-color: ${theme('colors.inputs.background')};
    background-clip: padding-box;
    border: 1px solid ${theme('colors.inputs.border')};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    
    :focus {
        background-color: ${theme('colors.inputs.background')};
        border-color: ${theme('colors.inputs.border')};
        outline: 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 0.25rem ${theme('colors.inputs.border')};
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
`;