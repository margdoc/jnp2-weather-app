import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

export const RadioButtonWrapper = styled.label`
    position: relative;
    flex: 1 1 auto;
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
  
    background: ${ifProp('checked',
            theme('colors.buttons.radio.checked.background'),
            theme('colors.buttons.radio.background'))
    };

    :hover {
        background: ${theme('colors.buttons.radio.hover.background')};
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;
    }
  
    :active {
        background: ${theme('colors.buttons.radio.active.background')};
        transition: background-color 0.15s ease-in-out;
    }
  
    input {
          box-sizing: border-box;
          padding: 0;
          position: absolute;
          clip: rect(0, 0, 0, 0);
          pointer-events: none;
    }
`;