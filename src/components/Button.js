import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Button = styled.button`
    color: inherit;
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    
    background: ${theme('colors.buttons.primary.background')};

    :hover {
        background: ${theme('colors.buttons.primary.hover.background')};
        transition: background-color 0.15s ease-in-out;
    }
  
    :active {
        background: ${theme('colors.buttons.primary.active.background')};
        transition: background-color 0.15s ease-in-out;
    }
`;