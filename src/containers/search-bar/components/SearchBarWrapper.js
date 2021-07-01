import styled from 'styled-components';
import { theme } from 'styled-tools';

export const SearchBarWrapper = styled.div`
    width: ${theme('dims.containers.weatherOptions.width')};
  
    display: flex;
    flex-direction: column;
    align-items: stretch;
  
    > * {
        margin-top: ${theme('dims.containers.weatherOptions.elements.marginTop')};
    }
`;