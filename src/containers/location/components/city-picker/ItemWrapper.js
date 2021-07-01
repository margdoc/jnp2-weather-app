import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

export const ItemWrapper = styled.div`
    background: ${ifProp('highlighted',
            theme('colors.cityPicker.item.hover.background'),
            theme('colors.cityPicker.item.background')
    )};
    padding: 5px;
  
    :hover {
        cursor: pointer;
        background: ${theme('colors.cityPicker.item.hover.background')};
    }
  
    :active {
        background: ${theme('colors.cityPicker.item.active.background')};
    }
`;