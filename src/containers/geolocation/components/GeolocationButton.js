import styled from 'styled-components';
import { theme } from 'styled-tools';

export const GeolocationButton = styled.img`
  width: ${theme('dims.buttons.geolocation')};
  height: ${theme('dims.buttons.geolocation')};

  filter: invert(${theme('colors.buttons.geolocation.inversion')});
  opacity: 0.5;
  transition: opacity 0.2s ease;
  
  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
  
  :active {
    opacity: 1;
  }
`;