import styled from 'styled-components';
import { theme } from 'styled-tools';

export const LocationWrapper = styled.div`
    display: grid;
    grid-template-columns: ${theme('dims.containers.weatherOptions.location.cityPickerWidth')} 1fr;
    place-items: center;
`;