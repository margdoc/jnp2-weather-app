import styled from 'styled-components';
import { theme } from 'styled-tools';

export const SwitchButtonWrapper = styled.div`
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;

    input {
        height: 1em;
        vertical-align: top;
        background-repeat: no-repeat;
        background-size: contain;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
        float: left;
        padding-left: 2.5em;
        width: 2em;
        margin-left: -2.5em;
        margin-right: 1em;
        background-position: left center;
        border-radius: 2em;
        transition: background-position 0.15s ease-in-out;
        background-color: ${theme('colors.buttons.themeSwitcher.background')};
        border: 1px solid ${theme('colors.buttons.themeSwitcher.elements')};
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${theme('colors.buttons.themeSwitcher.elements')}'/%3e%3c/svg%3e");
    }

    input:checked {
        background-position: right center;
    }
  
    input:hover {
        cursor: pointer;
        border: 1px solid ${theme('colors.buttons.themeSwitcher.hover.elements')};
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${theme('colors.buttons.themeSwitcher.hover.elements')}'/%3e%3c/svg%3e");
    }
`;