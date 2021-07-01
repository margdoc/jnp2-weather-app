import styled from 'styled-components';
import { theme } from 'styled-tools';

export const TableWrapper = styled.table`
    border: ${theme('dims.table.border')} solid ${theme('colors.table.border')};
    border-collapse: collapse;
  
    th, td {
      border: ${theme('dims.table.border')} solid ${theme('colors.table.border')};
      text-align: center;
      vertical-align: center;
      padding: ${theme('dims.table.cell.padding')};
    }
`;