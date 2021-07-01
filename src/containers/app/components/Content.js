import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    > * {
      margin-top: ${theme('dims.containers.main.elements.marginTop')};
    }
`;